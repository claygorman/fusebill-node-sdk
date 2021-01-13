export default class Stripe {
  constructor(client) {
    this.client = client
  }

  achTokenImport(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/achCardImport/Stripe',
      data,
      qs: options,
    })
  }

  creditCardTokenImport(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethodImport/Stripe',
      data,
      qs: options,
    })
  }

  connectAchTokenImport(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethodImport/stripeConnect',
      data,
      qs: options,
    })
  }

  connectCreditCardTokenImport(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/AchCardImport/stripeConnect',
      data,
      qs: options,
    })
  }
}
