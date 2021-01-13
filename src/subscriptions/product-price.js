export default class ProductPrice {
  constructor(client) {
    this.client = client
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/SubscriptionProductPriceOverrides',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/SubscriptionProductPriceOverrides',
      data,
      qs: options,
    })
  }

  delete(subscriptionProductId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/SubscriptionProductPriceOverrides/${subscriptionProductId}`,
      qs: options,
    })
  }
}
