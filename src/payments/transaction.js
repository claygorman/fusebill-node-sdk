export default class Transaction {
  constructor(client) {
    this.client = client
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/customerArActivities`,
      qs: options,
    })
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/aractivities',
      qs: options,
    })
  }
}
