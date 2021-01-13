export default class Credit {
  constructor(client) {
    this.client = client
  }

  read(transactionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Credits/${transactionId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Credits',
      data,
      qs: options,
    })
  }
}
