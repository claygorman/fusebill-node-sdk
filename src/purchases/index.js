import Purchase from './purchase'
import Discount from './discount'

export default class Purchases {
  constructor(client) {
    this.purchase = new Purchase(client)
    this.discount = new Discount(client)
  }
}
