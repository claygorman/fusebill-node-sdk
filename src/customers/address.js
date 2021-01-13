export default class Address {
  constructor(client) {
    this.client = client
  }

  read(customerId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/customerAddressPreferences/${customerId}`,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/CustomerAddressPreferences',
      data,
      qs: options,
    })
  }
}
