import { AxiosPromise } from 'axios'

declare class Stripe {
  achTokenImport(data: object, options?: {}): AxiosPromise

  creditCardTokenImport(data: object, options?: {}): AxiosPromise

  connectAchTokenImport(data: object, options?: {}): AxiosPromise

  connectCreditCardTokenImport(data: object, options?: {}): AxiosPromise
}

export { Stripe }
