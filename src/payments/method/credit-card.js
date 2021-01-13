export default class CreditCard {
  constructor(client) {
    this.client = client
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/paymentMethods/creditCard`,
      qs: options,
    })
  }

  read(paymentMethodId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/paymentMethods/${paymentMethodId}/creditCard`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethods/creditCard',
      data,
      qa: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/paymentMethods/creditCard',
      data,
      qa: options,
    })
  }

  delete(paymentMethodId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/paymentMethods/${paymentMethodId}/creditCard`,
      qa: options,
    })
  }
}
