import { Products } from './products'
import { Plans } from './plans'
import { PlanProducts } from './plan-products'
import { CustomFields } from './custom-fields'
import { Discounts } from './discounts'
import { PlanFamilies } from './plan-families'

declare class Catalog {
  plans: Plans
  products: Products
  planProducts: PlanProducts
  customFields: CustomFields
  discounts: Discounts
  planFamilies: PlanFamilies
}

export { Catalog }
