export default class Coupons {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/Coupons',
      qs: options,
    })
  }

  read(couponId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Coupons/${couponId}`,
      qs: options,
    })
  }

  validate(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Coupons/Validate',
      data,
      qs: options,
    })
  }

  apply(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/SubscriptionCoupons',
      data,
      qs: options,
    })
  }

  delete(subscriptionId, couponCode, deleteAllDiscounts, options = {}) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: '/SubscriptionCoupons',
      qs: Object.assign({}, options, {
        subscriptionId,
        couponCode,
        deleteAllDiscounts,
      }),
    })
  }
}
