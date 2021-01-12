// Type definitions for fusebill 1.0.0
// Project: https://github.com/claygorman/fusebill-js-sdk

import { Catalog } from './src/typescript/catalog'
import { AxiosPromise } from 'axios'

interface BaseOptions {
  baseUrl?: string
}

export interface BottleneckOptions {
  maxConcurrent?: number | null
  minTime?: number
  highWater?: number | null
  reservoir?: number | null
  reservoirRefreshInterval?: number | null
  reservoirRefreshAmount?: number | null
  reservoirIncreaseInterval?: number | null
  reservoirIncreaseAmount?: number | null
  reservoirIncreaseMaximum?: number | null
  [key: string]: any
}

export interface LimiterOptions {
  limiter?: BottleneckOptions
}

export interface ApiOptions extends BaseOptions, LimiterOptions {
  apiKey: string
}

declare class Client {
  constructor(options?: ApiOptions)
  apiRequest(options: {
    method?: string
    url?: string
    data?: any
    qs?: any
  }): AxiosPromise
  catalog: Catalog
}

export { Client }
