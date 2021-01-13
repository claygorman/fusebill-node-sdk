export default class Debit {
  constructor(client) {
    this.client = client
  }

  read(transactionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Debits/${transactionId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Debits',
      data,
      qs: options,
    })
  }
}
