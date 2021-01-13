import CreditCard from './credit-card'
import Ach from './ach'

export default class Index {
  constructor(client) {
    this.client = client
    this.creditCard = new CreditCard(client)
    this.ach = new Ach(client)
  }

  listByCustomer(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/paymentMethods/all`,
      qs: options,
    })
  }

  setCustomerDefault(paymentMethodId, customerId, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/paymentMethods/makeDefault',
      qs: Object.assign({}, options, {
        id: paymentMethodId,
        customerId,
      }),
    })
  }
}
