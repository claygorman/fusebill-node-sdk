import Customer from './customer'
import Email from './email'
import Billing from './billing'
import Address from './address'
import ShippingBillingAddress from './shipping-billing-address'

export default class Customers {
  constructor(client) {
    this.customer = new Customer(client)
    this.email = new Email(client)
    this.billing = new Billing(client)
    this.address = new Address(client)
    this.shippingBillingAddress = new ShippingBillingAddress(client)
  }
}
