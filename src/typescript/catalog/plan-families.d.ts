import { AxiosPromise } from 'axios'

declare class PlanFamilies {
  list(options?: {}): AxiosPromise

  listByPlanId(planId: string | number, options?: {}): AxiosPromise

  read(planFamilyId: string | number, options?: {}): AxiosPromise

  readBySubscriptionId(
    subscriptionId: string | number,
    options?: {}
  ): AxiosPromise
}

export { PlanFamilies }
