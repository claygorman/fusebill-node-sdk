import { AxiosPromise } from 'axios'

declare class Braintree {
  cardTokenImport(data: object, options?: {}): AxiosPromise
}

export { Braintree }
