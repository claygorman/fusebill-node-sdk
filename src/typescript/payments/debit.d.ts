import { AxiosPromise } from 'axios'

declare class Debit {
  read(transactionId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise
}

export { Debit }
