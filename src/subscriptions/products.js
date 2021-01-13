export default class Products {
  constructor(client) {
    this.client = client
  }

  read(subscriptionProductId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/SubscriptionProducts/${subscriptionProductId}`,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/SubscriptionProducts',
      data,
      qs: options,
    })
  }

  updateQuantity(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/SubscriptionProductQuantityChange',
      data,
      qs: options,
    })
  }
}
