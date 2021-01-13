import { AxiosPromise } from 'axios'

declare class BillingPeriodDefinitions {
  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  readBySubscriptionId(
    subscriptionId: string | number,
    options?: {}
  ): AxiosPromise

  read(billingPeriodDefinitionId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  preview(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  delete(billingPeriodDefinitionId: string | number, options?: {}): AxiosPromise
}

export { BillingPeriodDefinitions }
