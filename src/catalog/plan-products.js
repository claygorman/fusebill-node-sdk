export default class PlanProducts {
  constructor(client) {
    this.client = client
  }

  listByPlan(planId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/plans/${planId}/planProducts`,
      qs: options,
    })
  }

  listByCatalogProduct(productId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/products/${productId}/planProducts`,
      qs: options,
    })
  }

  read(planProductId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/PlanProducts/${planProductId}`,
      qs: options,
    })
  }

  patch(data) {
    return this.client.apiRequest({
      method: 'PATCH',
      url: `/planProducts`,
      data,
    })
  }
}
