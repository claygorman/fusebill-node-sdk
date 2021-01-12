import { AxiosPromise } from 'axios'

declare class Products {
  summary(options?: {}): AxiosPromise

  list(options?: {}): AxiosPromise

  read(productId: string | number, options?: {}): AxiosPromise
}

export { Products }
