export default class Plans {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/Plans',
      qs: options,
    })
  }

  read(planId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Plans/${planId}`,
      qs: options,
    })
  }
}
