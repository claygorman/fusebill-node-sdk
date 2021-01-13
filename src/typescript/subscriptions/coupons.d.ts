import { AxiosPromise } from 'axios'

declare class Coupons {
  list(options?: {}): AxiosPromise

  read(couponId: string | number, options?: {}): AxiosPromise

  validate(data: object, options?: {}): AxiosPromise

  apply(data: object, options?: {}): AxiosPromise

  delete(
    subscriptionId: string | number,
    couponCode: string | number,
    deleteAllDiscounts: string | number,
    options?: {}
  ): AxiosPromise
}

export { Coupons }
