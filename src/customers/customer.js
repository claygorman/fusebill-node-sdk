export default class Customer {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/customers',
      qs: options,
    })
  }

  readOverview(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/overview`,
      qs: options,
    })
  }

  read(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}`,
      qs: options,
    })
  }

  create(data) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/customers',
      data,
    })
  }

  activate(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/customeractivation',
      data,
      qs: options,
    })
  }

  activateSubscriptionsAndPurchases(customerId, data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/customers/purchase/${customerId}`,
      data,
      qs: options,
    })
  }

  hold(customerId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/customerhold/${customerId}`,
      qs: options,
    })
  }

  unHold(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/customers/unhold',
      data,
      qs: options,
    })
  }

  cancel(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/customercancellation',
      data,
      qs: options,
    })
  }

  unCancel(customerId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/customers/uncancel/${customerId}`,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/customers',
      data,
      qs: options,
    })
  }

  createNote(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/customernotes',
      data,
      qs: options,
    })
  }

  deleteNote(noteId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/customerNotes/${noteId}`,
      data,
      qs: options,
    })
  }
}
