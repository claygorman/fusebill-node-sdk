export default class Payment {
  constructor(client) {
    this.client = client
  }

  read(paymentId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/payments/${paymentId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/payments',
      data,
      qs: options,
    })
  }
}
