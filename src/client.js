import axios from 'axios'
import _ from 'lodash'
import Bottleneck from 'bottleneck'
import { EventEmitter } from 'events'

import Catalog from './catalog'

const debug = require('debug')('fusebill:client')

// define how long to wait API response before throwing a timeout error
const API_TIMEOUT = 15000
const MAX_USE_PERCENT_DEFAULT = 90

const getLimiter = (options) =>
  new Bottleneck(
    Object.assign(
      {
        maxConcurrent: 2,
        minTime: 1000 / 9,
      },
      options.limiter
    )
  )

const setInstances = (client) => {
  client.catalog = new Catalog(client)
}

const prepareParams = (opts, self) => {
  const params = _.cloneDeep(opts)
  params.headers = Object.assign({}, params.headers)
  if (self.apiKey) {
    params.headers.Authorization = `Basic ${self.apiKey}`
  }
  params.baseURL = self.baseURL
  params.method = params.method || 'GET'
  params.qs = Object.assign({}, params.qs)
  params.params = Object.assign({}, params.qs)

  if (params.params.query) {
    params.params.query = Object.keys(params.params.query)
      .map((x) => `${x}:${params.params.query[x]}`)
      .join(';')
  }

  if (params.qs) delete params.qs

  params.timeout = self.apiTimeout
  return params
}

export class Client extends EventEmitter {
  constructor(options = {}) {
    super()
    this.qs = {}
    this.auth = undefined
    this.setAuth(options)
    this.maxUsePercent =
      typeof options.maxUsePercent !== 'undefined'
        ? options.maxUsePercent
        : MAX_USE_PERCENT_DEFAULT
    this.baseURL = options.baseURL || 'https://secure.fusebill.com/v1'
    this.apiTimeout = options.timeout || API_TIMEOUT
    this.apiCalls = 0
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

  getApiLimit() {
    this.limit = this.limit || {}
    const collectedAt = this.limit.collectedAt || 0
    const recencyMinutes = (Date.now() - collectedAt) / (60 * 1000)
    debug('recencyMinutes', recencyMinutes)
    if (recencyMinutes < 5) {
      return Promise.resolve(this.limit)
    }
    return this.apiRequest({
      method: 'GET',
      path: '/integrations/v1/limit/daily',
    }).then((results) => {
      this.limit = results.filter((r) => r.name === 'api-calls-daily')[0]
      return this.limit
    })
  }
}

export default Client
