import { Customer } from './customer'
import { Email } from './email'
import { Billing } from './billing'
import { Address } from './address'
import { ShippingBillingAddress } from './shipping-billing-address'

declare class Customers {
  customer: Customer
  email: Email
  billing: Billing
  address: Address
  shippingBillingAddress: ShippingBillingAddress
}

export { Customers }
