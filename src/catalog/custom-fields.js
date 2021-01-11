export default class CustomFields {
  constructor(client) {
    this.client = client
  }

  updateOnSubscription(data) {
    return this.client.apiRequest({
      method: 'PUT',
      url: 'SubscriptionCustomFields',
      data,
    })
  }

  updateOnSubscriptionProduct(data) {
    return this.client.apiRequest({
      method: 'PUT',
      url: 'SubscriptionProductCustomFields',
      data,
    })
  }

  updateOnPurchase(data) {
    return this.client.apiRequest({
      method: 'PUT',
      url: 'SubscriptionProductCustomFields',
      data,
    })
  }
}
