import { AxiosPromise } from 'axios'

declare class CustomFields {
  updateOnSubscription(data: object): AxiosPromise

  updateOnSubscriptionProduct(data: object): AxiosPromise

  updateOnPurchase(data: object): AxiosPromise
}

export { CustomFields }
