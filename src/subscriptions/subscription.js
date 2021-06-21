export default class Subscription {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/subscriptions/getAll',
      qs: options,
    })
  }

  listSummary(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/subscriptionSummary',
      qs: options,
    })
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/subscriptions`,
      qs: options,
    })
  }

  read(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/subscriptions/${subscriptionId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/subscriptions',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/subscriptions',
      data,
      qs: options,
    })
  }

  activate(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/SubscriptionActivation/${subscriptionId}`,
      qs: options,
    })
  }

  activateMultiple(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/SubscriptionsActivation',
      data,
      qs: options,
    })
  }

  provision(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/SubscriptionProvision/${subscriptionId}`,
      qs: options,
    })
  }

  cancel(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/subscriptionCancellation',
      data,
      qs: options,
    })
  }

  delete(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/subscriptions/Delete/${subscriptionId}`,
      qs: options,
    })
  }

  countByStatus(customerId, status, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/subscriptions/GetCountByStatus?status=${status}`,
      qs: options,
    })
  }
}
