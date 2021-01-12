import { AxiosPromise } from 'axios'

declare class Discounts {
  list(options?: {}): AxiosPromise

  read(discountId: string | number, options?: {}): AxiosPromise
}

export { Discounts }
