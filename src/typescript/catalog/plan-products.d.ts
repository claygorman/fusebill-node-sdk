import { AxiosPromise } from 'axios'

declare class PlanProducts {
  listByPlan(planId: string | number, options?: {}): AxiosPromise

  listByCatalogProduct(productId: string | number, options?: {}): AxiosPromise

  read(planProductId: string | number, options?: {}): AxiosPromise

  patch(data: object): AxiosPromise
}

export { PlanProducts }
