import axios from 'axios'
import axiosRetry from 'axios-retry'
import _ from 'lodash'
import Bottleneck from 'bottleneck'
import { EventEmitter } from 'events'

import Catalog from './catalog'
import Customers from './customers'
import Subscriptions from './subscriptions'
import Purchases from './purchases'
import Payments from './payments'
import Invoices from './invoices'

const debug = require('debug')('fusebill:client')

// define how long to wait API response before throwing a timeout error
const API_TIMEOUT = 15000
const MAX_USE_PERCENT_DEFAULT = 90
const DEFAULT_RETRIES = 3

axiosRetry(axios, { retries: DEFAULT_RETRIES })

const getLimiter = (options) =>
  new Bottleneck({
    maxConcurrent: 2,
    minTime: 1000 / 9,
    ...options.limiter,
  })

const setInstances = (client) => {
  client.catalog = new Catalog(client)
  client.customers = new Customers(client)
  client.subscriptions = new Subscriptions(client)
  client.purchases = new Purchases(client)
  client.payments = new Payments(client)
  client.invoices = new Invoices(client)
}

const prepareParams = (opts, self) => {
  const params = _.cloneDeep(opts)
  params.headers = { ...params.headers }
  if (self.apiKey) {
    params.headers.Authorization = `Basic ${self.apiKey}`
  }
  params.baseURL = self.baseURL
  params.method = params.method || 'GET'
  params.qs = { ...params.qs }
  params.params = { ...params.qs }

  // https://developer.fusebill.com/reference#string-filtering
  if (params.params.query) {
    const fusebillQueryFormat =
      Object.keys(params.params.query)
        .filter((x) => typeof params.params.query[x] !== 'undefined')
        .map((x) => `${x}:${params.params.query[x]}`)
        .join(';') || undefined
    delete params.params.query
    if (fusebillQueryFormat) params.params.query = fusebillQueryFormat
  }

  if (params.qs) delete params.qs

  params.timeout = self.apiTimeout

  params['axios-retry'] = {
    retries: params.retries || self.defaultRetries,
  }

  if (params.retries) delete params.retries

  return params
}

export class Client extends EventEmitter {
  constructor(options = {}) {
    super()
    this.qs = {}
    this.auth = undefined
    this.setAuth(options)
    this.maxUsePercent = options.maxUsePercent || MAX_USE_PERCENT_DEFAULT
    this.baseURL = options.baseURL || 'https://secure.fusebill.com/v1'
    this.apiTimeout = options.timeout || API_TIMEOUT
    this.apiCalls = 0
    this.defaultRetries = options.retries || DEFAULT_RETRIES
    this.on('apiCall', (params) => {
      debug('apiCall', _.pick(params, ['method', 'url']))
      this.apiCalls += 1
    })
    this.checkLimit =
      options.checkLimit !== undefined ? options.checkLimit : true
    this.limiter = getLimiter(options)
    setInstances(this)
  }

  setAuth(options = {}) {
    if (options.apiKey) {
      this.apiKey = options.apiKey
    }
  }

  apiRequest(opts) {
    const params = prepareParams(opts, this)
    return this.checkApiLimit(params).then(() => {
      this.emit('apiCall', params)
      return this.limiter.schedule(() =>
        axios(params)
          .then((res) => {
            this.updateApiLimit(res)
            return res
          })
          .then((res) => res.data)
      ) // limit the number of concurrent requests
    })
  }

  updateApiLimit(res) {
    const { headers } = res
    if (this.usageLimit === undefined) {
      this.usageLimit = headers['x-rate-limit-limit-day']
    }
    if (this.usageLimit !== undefined) {
      this.currentUsage =
        this.usageLimit - headers['x-rate-limit-remaining-day']
    }
    return Promise.resolve()
  }

  checkApiLimit(params) {
    return new Promise((resolve, reject) => {
      // don't check the api limit for the api call
      if (this.auth) return resolve()
      // don't check the api limit for the api call
      if (!this.checkLimit) return resolve()
      // if maxUsePercent set to 0, do not check for the API limit (use at your own risk)
      if (this.maxUsePercent === 0) return resolve()

      if (this.currentUsage !== undefined) {
        const usagePercent = (100.0 * this.currentUsage) / this.usageLimit
        debug('usagePercent', usagePercent, 'apiCalls', this.apiCalls)
        if (usagePercent > this.maxUsePercent) {
          const err = new Error('Too close to the API limit')
          err.usageLimit = this.usageLimit
          err.currentUsage = this.currentUsage
          err.usagePercent = usagePercent
          reject(err)
        }
      }
      resolve()
    })
  }

  // TODO: Implement this
  // getApiLimit() {
  //   this.limit = this.limit || {}
  //   const collectedAt = this.limit.collectedAt || 0
  //   const recencyMinutes = (Date.now() - collectedAt) / (60 * 1000)
  //   debug('recencyMinutes', recencyMinutes)
  //   if (recencyMinutes < 5) {
  //     return Promise.resolve(this.limit)
  //   }
  //   return this.apiRequest({
  //     method: 'GET',
  //     path: '/integrations/v1/limit/daily',
  //   }).then((results) => {
  //     this.limit = results.filter((r) => r.name === 'api-calls-daily')[0]
  //     return this.limit
  //   })
  // }
}

export default Client
