import Subscription from './subscription'
import Products from './products'
import ProductPrice from './product-price'
import BillingPeriodDefinitions from './billing-period-definitions'
import Coupons from './coupons'
import Migrations from './migrations'

export default class Customers {
  constructor(client) {
    this.subscription = new Subscription(client)
    this.products = new Products(client)
    this.productPrice = new ProductPrice(client)
    this.billingPeriodDefinitions = new BillingPeriodDefinitions(client)
    this.coupons = new Coupons(client)
    this.migrations = new Migrations(client)
  }
}
