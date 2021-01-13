import { AxiosPromise } from 'axios'

declare class ProductPrice {
  create(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  delete(subscriptionProductId: string | number, options?: {}): AxiosPromise
}

export { ProductPrice }
