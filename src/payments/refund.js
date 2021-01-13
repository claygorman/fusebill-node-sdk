export default class Refund {
  constructor(client) {
    this.client = client
  }

  read(transactionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Refunds/${transactionId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Refunds',
      data,
      qs: options,
    })
  }
}
