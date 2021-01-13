import { AxiosPromise } from 'axios'

declare class Credit {
  read(transactionId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise
}

export { Credit }
