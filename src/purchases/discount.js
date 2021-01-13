export default class Discount {
  constructor(client) {
    this.client = client
  }

  read(purchaseDiscountId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/PurchaseDiscounts/${purchaseDiscountId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/purchaseDiscounts',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/purchaseDiscounts',
      data,
      qs: options,
    })
  }

  delete(purchaseDiscountId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/PurchaseDiscounts/${purchaseDiscountId}`,
      qs: options,
    })
  }
}
