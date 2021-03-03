import { AxiosPromise } from 'axios'

declare class Invoice {
  list(options?: {}): AxiosPromise

  listSummary(options?: {}): AxiosPromise

  listByCustomer(
    customerId: string | number,
    showZeroDollarCharges?: boolean,
    options?: {}
  ): AxiosPromise

  read(
    invoiceId: string | number,
    showTrackedItems?: boolean,
    groupCharges?: boolean,
    options?: {}
  ): AxiosPromise

  readAsHtml(
    invoiceId: string | number,
    showTrackedItems?: boolean,
    options?: {}
  ): AxiosPromise

  readAsPdf(
    invoiceId: string | number,
    showTrackedItems?: boolean,
    options?: {}
  ): AxiosPromise

  listCreditAllocations(invoiceId: string | number, options?: {}): AxiosPromise

  listPaymentAllocations(invoiceId: string | number, options?: {}): AxiosPromise

  writeOff(data: object, options?: {}): AxiosPromise
}

export { Invoice }
