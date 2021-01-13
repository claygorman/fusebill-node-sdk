export default class Email {
  constructor(client) {
    this.client = client
  }

  read(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customers/${customerId}/CustomerEmailPreferences`,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/CustomerEmailPreferences',
      data,
      qs: options,
    })
  }
}
