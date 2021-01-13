import { AxiosPromise } from 'axios'

declare class Purchase {
  listByProduct(productId: string | number, options?: {}): AxiosPromise

  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  read(purchaseId: string | number, options?: {}): AxiosPromise

  createBulk(data: object, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  finalize(data: object, options?: {}): AxiosPromise

  split(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  applyCoupon(data: object, options?: {}): AxiosPromise

  deleteCoupon(
    purchaseId: string | number,
    couponCode: string | number,
    deleteAllDiscounts: string | number,
    options?: {}
  ): AxiosPromise

  cancel(data: object, options?: {}): AxiosPromise

  deleteDraft(purchaseId: string | number, options?: {}): AxiosPromise
}

export { Purchase }
