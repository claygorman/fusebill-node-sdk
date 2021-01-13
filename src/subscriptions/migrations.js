export default class Migrations {
  constructor(client) {
    this.client = client
  }

  read(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/subscriptions/${subscriptionId}/migrate`,
      qs: options,
    })
  }

  create(subscriptionId, data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/subscriptions/${subscriptionId}/migrate`,
      data,
      qs: options,
    })
  }

  cancel(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/subscriptions/${subscriptionId}/migrate`,
      qs: options,
    })
  }
}
