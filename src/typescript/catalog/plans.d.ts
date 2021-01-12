import { AxiosPromise } from 'axios'

declare class Plans {
  list(options?: {}): AxiosPromise

  read(planId: string | number, options?: {}): AxiosPromise
}

export { Plans }
