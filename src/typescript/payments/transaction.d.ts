import { AxiosPromise } from 'axios'

declare class Transaction {
  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  list(options?: {}): AxiosPromise
}

export { Transaction }
