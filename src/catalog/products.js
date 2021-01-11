export default class Products {
  constructor(client) {
    this.client = client
  }

  summary(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/ProductSummary',
      qs: options,
    })
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/Products',
      qs: options,
    })
  }

  read(productId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Products/${productId}`,
      qs: options,
    })
  }
}
