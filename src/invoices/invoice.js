export default class Invoice {
  constructor(client) {
    this.client = client
  }

  list(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/Invoices',
      qs: options,
    })
  }

  listSummary(options) {
    return this.client.apiRequest({
      method: 'GET',
      url: '/invoiceSummaries',
      qs: options,
    })
  }

  listByCustomer(customerId, showZeroDollarCharges = false, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Customers/${customerId}/Invoices`,
      qs: Object.assign({}, options, {
        showZeroDollarCharges,
      }),
    })
  }

  read(invoiceId, showTrackedItems = false, groupCharges = false, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Invoices/${invoiceId}`,
      qs: Object.assign({}, options, {
        showTrackedItems,
        groupCharges,
      }),
    })
  }

  readAsHtml(invoiceId, showTrackedItems = false, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Invoices/html/${invoiceId}`,
      qs: Object.assign({}, options, {
        showTrackedItems,
      }),
    })
  }

  readAsPdf(invoiceId, showTrackedItems = false, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/Invoices/pdf/${invoiceId}`,
      qs: Object.assign({}, options, {
        showTrackedItems,
      }),
    })
  }

  listCreditAllocations(invoiceId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/invoices/${invoiceId}/creditAllocations`,
      qs: options,
    })
  }

  listPaymentAllocations(invoiceId, options) {
    return this.client.apiRequest({
      method: 'GET',
      url: `/invoices/${invoiceId}/paymentAllocations`,
      qs: options,
    })
  }

  writeOff(data, options) {
    return this.client.apiRequest({
      method: 'POST',
      url: '/invoices/writeoff',
      data,
      qs: options,
    })
  }
}
