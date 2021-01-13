import { AxiosPromise } from 'axios'

declare class Paypal {
  create(data: object, options?: {}): AxiosPromise

  delete(paymentMethodId: string | number, options?: {}): AxiosPromise
}

export { Paypal }
