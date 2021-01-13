export default class Paypal {
  constructor(client) {
    this.client = client
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Paypal',
      data,
      qs: options,
    })
  }

  delete(paymentMethodId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/Paypal/${paymentMethodId}`,
      qs: options,
    })
  }
}
