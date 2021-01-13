import { AxiosPromise } from 'axios'

declare class Address {
  read(customerId: string | number, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise
}

export { Address }
