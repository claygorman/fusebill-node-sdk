import { AxiosPromise } from 'axios'

import { Ach } from './ach'
import { CreditCard } from './credit-card'

declare class Method {
  ach: Ach
  creditCard: CreditCard

  listByCustomer(customerId: string | number, options?: {}): AxiosPromise

  setCustomerDefault(
    paymentMethodId: string | number,
    customerId: string | number,
    options?: {}
  ): AxiosPromise
}

export { Method }
