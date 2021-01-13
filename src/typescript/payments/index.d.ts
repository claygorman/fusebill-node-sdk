import { Payment } from './payment'
import { Activity } from './activity'
import { Refund } from './refund'
import { Method } from './method'
import { Transaction } from './transaction'
import { Credit } from './credit'
import { Debit } from './debit'
import { Stripe } from './stripe'
import { Paypal } from './paypal'
import { Braintree } from './braintree'

declare class Payments {
  payment: Payment
  activity: Activity
  refund: Refund
  method: Method
  transaction: Transaction
  credit: Credit
  debit: Debit
  stripe: Stripe
  paypal: Paypal
  braintree: Braintree
}

export { Payments }
