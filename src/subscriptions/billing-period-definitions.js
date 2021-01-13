export default class BillingPeriodDefinitions {
  constructor(client) {
    this.client = client
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/billingperioddefinitions`,
      qs: options,
    })
  }

  readBySubscriptionId(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/BillingPeriodDefinitions/GetBySubscription/${subscriptionId}`,
      qs: options,
    })
  }

  read(billingPeriodDefinitionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/BillingPeriodDefinitions/${billingPeriodDefinitionId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/BillingPeriodDefinitions',
      data,
      qs: options,
    })
  }

  preview(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/BillingPeriodDefinitions/Preview',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/BillingPeriodDefinitions',
      data,
      qs: options,
    })
  }

  delete(billingPeriodDefinitionId, options) {
    return this.client.apiRequest({
      method: 'DELETE',
      url: `/BillingPeriodDefinitions/${billingPeriodDefinitionId}`,
      qs: options,
    })
  }
}
