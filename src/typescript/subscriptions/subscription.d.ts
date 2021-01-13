import { AxiosPromise } from 'axios'

declare class Subscription {
  list(options?: {}): AxiosPromise

  listSummary(options?: {}): AxiosPromise

  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  read(subscriptionId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  activate(
    subscriptionId: string | number,
    data: object,
    options?: {}
  ): AxiosPromise

  activateMultiple(data: object, options?: {}): AxiosPromise

  provision(subscriptionId: string | number, options?: {}): AxiosPromise

  cancel(data: object, options?: {}): AxiosPromise

  delete(subscriptionId: string | number, options?: {}): AxiosPromise

  countByStatus(
    customerId: string | number,
    status:
      | 'Active'
      | 'Draft'
      | 'Cancelled'
      | 'Provisioning'
      | 'Expired'
      | 'Suspended'
      | 'Migrated'
      | 'StandingOrder'
  )
}

export { Subscription }
