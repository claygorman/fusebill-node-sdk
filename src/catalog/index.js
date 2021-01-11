import Plans from './plans'
import Products from './products'
import PlanProducts from './plan-products'
import CustomFields from './custom-fields'
import Discounts from './discounts'
import PlanFamilies from './plan-families'

export default class Catalog {
  constructor(client) {
    this.plans = new Plans(client)
    this.products = new Products(client)
    this.planProducts = new PlanProducts(client)
    this.customFields = new CustomFields(client)
    this.discounts = new Discounts(client)
    this.planFamilies = new PlanFamilies(client)
  }
}
