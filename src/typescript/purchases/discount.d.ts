import { AxiosPromise } from 'axios'

declare class Discount {
  read(purchaseDiscountId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  delete(purchaseDiscountId: string | number, options?: {}): AxiosPromise
}

export { Discount }
