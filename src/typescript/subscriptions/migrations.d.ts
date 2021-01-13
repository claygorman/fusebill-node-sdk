import { AxiosPromise } from 'axios'

declare class Migrations {
  read(subscriptionId: string | number, options?: {}): AxiosPromise

  create(
    subscriptionId: string | number,
    data: object,
    options?: {}
  ): AxiosPromise

  delete(subscriptionId: string | number, options?: {}): AxiosPromise
}

export { Migrations }
