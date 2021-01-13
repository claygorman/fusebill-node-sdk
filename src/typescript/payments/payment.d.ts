import { AxiosPromise } from 'axios'

declare class Payment {
  read(paymentId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise
}

export { Payment }
