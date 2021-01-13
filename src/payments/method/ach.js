export default class Ach {
  constructor(client) {
    this.client = client
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/paymentMethods/achCard`,
      qs: options,
    })
  }

  read(paymentMethodId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/paymentMethods/${paymentMethodId}/achCard`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethods/achCard',
      data,
      qa: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/paymentMethods/achCard',
      data,
      qa: options,
    })
  }

  delete(paymentMethodId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/paymentMethods/${paymentMethodId}/achCard`,
      qa: options,
    })
  }
}
