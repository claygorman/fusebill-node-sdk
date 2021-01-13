import Payment from './payment'
import Activity from './activity'
import Refund from './refund'
import Method from './method'
import Transaction from './transaction'
import Credit from './credit'
import Debit from './debit'
import Stripe from './stripe'
import Paypal from './payment'
import Braintree from './braintree'

export default class Payments {
  constructor(client) {
    this.payment = new Payment(client)
    this.activity = new Activity(client)
    this.refund = new Refund(client)
    this.method = new Method(client)
    this.transaction = new Transaction(client)
    this.credit = new Credit(client)
    this.debit = new Debit(client)
    this.stripe = new Stripe(client)
    this.paypal = new Paypal(client)
    this.braintree = new Braintree(client)
  }
}
