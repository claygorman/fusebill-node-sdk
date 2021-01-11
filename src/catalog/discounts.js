export default class Discounts {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: 'Discounts',
      qs: options,
    })
  }

  read(discountId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Discounts/${discountId}`,
      qs: options,
    })
  }
}
