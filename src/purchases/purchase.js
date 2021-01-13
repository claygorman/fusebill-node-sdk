export default class Purchase {
  constructor(client) {
    this.client = client
  }

  listByProduct(productId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Purchases/GetByProductId?id=${productId}`,
      qs: options,
    })
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Customers/${customerId}/Purchases`,
      qs: options,
    })
  }

  read(purchaseId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Purchases/${purchaseId}`,
      qs: options,
    })
  }

  createBulk(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Purchases/BulkCreate',
      data,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Purchases',
      data,
      qs: options,
    })
  }

  finalize(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/purchases/Purchase',
      data,
      qs: options,
    })
  }

  split(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/purchases/split',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/Purchases',
      data,
      qs: options,
    })
  }

  applyCoupon(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/PurchaseCoupons',
      data,
      qs: options,
    })
  }

  deleteCoupon(purchaseId, couponCode, deleteAllDiscounts, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: '/PurchaseCoupons',
      qs: Object.assign({}, options, {
        purchaseId,
        couponCode,
        deleteAllDiscounts,
      }),
    })
  }

  cancel(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/purchases/cancel',
      data,
      qs: options,
    })
  }

  deleteDraft(purchaseId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: `/Purchases/${purchaseId}`,
      qs: options,
    })
  }
}
