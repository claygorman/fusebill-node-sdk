import { AxiosPromise } from 'axios'

declare class Refund {
  read(transactionId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise
}

export { Refund }
