import { Subscription } from './subscription'
import { Products } from './products'
import { ProductPrice } from './product-price'
import { BillingPeriodDefinitions } from './billing-period-definitions'
import { Coupons } from './coupons'
import { Migrations } from './migrations'

declare class Subscriptions {
  subscription: Subscription
  products: Products
  productPrice: ProductPrice
  billingPeriodDefinitions: BillingPeriodDefinitions
  coupons: Coupons
  migrations: Migrations
}

export { Subscriptions }
