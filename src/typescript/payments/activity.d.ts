import { AxiosPromise } from 'axios'

declare class Activity {
  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  list(options?: {}): AxiosPromise

  listChildActivityByCustomer(
    customerId: string | number,
    options?: {}
  ): AxiosPromise

  read(paymentActivityId: string | number, options?: {}): AxiosPromise

  autoResolve(data: object, options?: {}): AxiosPromise

  manualResolve(data: object, options?: {}): AxiosPromise
}

export { Activity }
