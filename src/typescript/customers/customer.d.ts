import { AxiosPromise } from 'axios'

declare class Customer {
  list(options?: {}): AxiosPromise

  readOverview(customerId: string | number, options?: {}): AxiosPromise

  read(customerId: string | number, options?: {}): AxiosPromise

  create(data: object): AxiosPromise

  activate(data: object, options?: {}): AxiosPromise

  activateSubscriptionsAndPurchases(
    customerId: string | number,
    data: object,
    options?: {}
  ): AxiosPromise

  hold(customerId: string | number, options?: {}): AxiosPromise

  unHold(data: object, options?: {}): AxiosPromise

  cancel(data: object, options?: {}): AxiosPromise

  unCancel(customerId: string | number, options?: {}): AxiosPromise

  update(data: object, options?: {}): AxiosPromise

  createNote(data: object, options?: {}): AxiosPromise

  deleteNote(noteId: string | number, options?: {}): AxiosPromise
}

export { Customer }
