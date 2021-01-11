export default class PlanFamilies {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: 'PlanFamilies',
      qs: options,
    })
  }

  listByPlanId(planId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/PlanFamilies/ByPlan/${planId}`,
      qs: options,
    })
  }

  read(planFamilyId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/PlanFamilies/${planFamilyId}`,
      qs: options,
    })
  }

  readBySubscriptionId(subscriptionId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/planFamilies/bySubscription/${subscriptionId}`,
      qs: options,
    })
  }
}
