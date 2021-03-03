import Invoice from './invoice'

export default class Invoices {
  constructor(client) {
    this.invoice = new Invoice(client)
  }
}
