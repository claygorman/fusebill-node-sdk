export default class Billing {
  constructor(client) {
    this.client = client
  }

  read(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customerbillingsetting/${customerId}`,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/customerbillingsetting',
      data,
      qs: options,
    })
  }
}
