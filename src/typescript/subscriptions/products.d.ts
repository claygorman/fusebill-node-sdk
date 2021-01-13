import { AxiosPromise } from 'axios'

declare class Products {
  read(subscriptionId: string | number, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  updateQuantity(data: object, options?: {}): AxiosPromise
}

export { Products }
