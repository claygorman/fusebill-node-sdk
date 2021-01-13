export default class Activity {
  constructor(client) {
    this.client = client
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/paymentactivities`,
      qs: options,
    })
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/PaymentActivities/GetByAccountID',
      qs: options,
    })
  }

  listChildActivityByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/childPaymentActivities`,
      qs: options,
    })
  }

  read(paymentActivityId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/PaymentActivities/${paymentActivityId}`,
      qs: options,
    })
  }

  autoResolve(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/payments/AutoResolve',
      data,
      qs: options,
    })
  }

  manualResolve(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentActivities/Resolve',
      data,
      qs: options,
    })
  }
}
