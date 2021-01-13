import { AxiosPromise } from 'axios'

declare class Billing {
  read(customerId: string | number, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise
}

export { Billing }
