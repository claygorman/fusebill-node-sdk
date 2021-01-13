import { AxiosPromise } from 'axios'

declare class CreditCard {
  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  read(paymentMethodId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  delete(paymentMethodId: string | number, options?: {}): AxiosPromise
}

export { CreditCard }
