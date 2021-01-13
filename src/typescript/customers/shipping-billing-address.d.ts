import { AxiosPromise } from 'axios'

declare class ShippingBillingAddress {
  read(addressId: string | number, options?: {}): AxiosPromise

  create(data: object, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  readCountries(options?: {}): AxiosPromise
}

export { ShippingBillingAddress }
