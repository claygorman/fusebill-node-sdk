import { AxiosPromise } from 'axios'

declare class Email {
  read(customerId: string | number, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise
}

export { Email }
