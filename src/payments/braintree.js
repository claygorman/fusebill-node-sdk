export default class Braintree {
  constructor(client) {
    this.client = client
  }

  cardTokenImport(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethodImport/Braintree',
      data,
      qs: options,
    })
  }
}
