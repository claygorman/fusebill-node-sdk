export default class ShippingBillingAddress {
  constructor(client) {
    this.client = client
  }

  read(addressId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Addresses/${addressId}`,
      qs: options,
    })
  }

  create(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/Addresses',
      data,
      qs: options,
    })
  }

  update(data, options) {
    return this.client.apiRequest({
      method: 'PUT',
      url: '/Addresses',
      data,
      qs: options,
    })
  }

  readCountries(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/Countries',
      qs: options,
    })
  }
}
