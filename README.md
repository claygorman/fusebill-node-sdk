# fusebill-node-sdk

Javascript / node.js wrapper for the [Fusebill API](https://developer.fusebill.com/reference#overview)


## Installing

```shell
npm install fusebill-node
```

## Instantiate client

```javascript
const Fusebill = require('fusebill-node')
const fusebill = new Fusebill({
  apiKey: 'abc',
  checkLimit: false // (Optional) Specify whether to check the API limit on each call. Default: true
})
```

To change the base url:

```javascript
const fusebill = new Fusebill({ apiKey: YOUR_API_KEY, baseURL: 'https://some-url' })
```

### Changing rate limiter options

[Bottleneck](https://github.com/SGrondin/bottleneck) is used for rate limiting. To override the default settings, pass a `limiter` object when instantiating the client. Bottleneck options can be found [here](https://github.com/SGrondin/bottleneck#constructor).

```javascript
const fusebill = new Fusebill({
  apiKey: YOUR_API_KEY,
  limiter: {
    maxConcurrent: 2,
    minTime: 1000 / 9,
  }
})
```

## Usage

All methods return a [promise]. The success case includes the returned object
from the response. Use the API method via:

```javascript
fusebill.catalog.plans
  .list(options)
  .then(results => {
    console.log(results)
  })
  .catch(err => {
    console.error(err)
  })
```

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

## Samples

Please see repository with [samples] applications with common cases.

[samples]: https://github.com/someexampleshere

## API limits

Fusebill has API limits (180,000 per day by default). To
prevent from consuming it all-at-once, this library checks API quotas regularly
and will fail requests if the total is too close to the max. By default

## Available Methods

### Index

```javascript
// plans
fusebill.catalog.plans.list(opts)
fusebill.catalog.plans.read(planId, opts)

// products
fusebill.catalog.products.summary(opts)
fusebill.catalog.products.list(opts)
fusebill.catalog.products.read(productId, opts)

// plan products
fusebill.catalog.planProducts.listByPlan(planId, opts)
fusebill.catalog.planProducts.listByCatalogProduct(productId, opts)
fusebill.catalog.planProducts.read(planProductId, opts)
fusebill.catalog.planProducts.patch(data)

// plan families
fusebill.catalog.planFamilies.list(opts)
fusebill.catalog.planFamilies.listByPlanId(planId, opts)
fusebill.catalog.planFamilies.read(planFamilyId, opts)
fusebill.catalog.planFamilies.readBySubscriptionId(subscriptionId, opts)

// discounts
fusebill.catalog.discounts.list(opts)
fusebill.catalog.discounts.read(discountId, opts)

// custom fields
fusebill.catalog.customFields.updateOnSubscription(data)
fusebill.catalog.customFields.updateOnSubscriptionProduct(data)
fusebill.catalog.customFields.updateOnPurchase(data)
```

## Not wrapped endpoint(s)

It is possible to access the fusebill request method directly,
it could be handy if wrapper doesn't have implementation for some endpoint yet.
Using of exposed request method benefits by the bottleneck throttling, auth and request parsing and formatting already in place

Note: This library uses [Axios](https://www.npmjs.com/package/axios#axios-api) for http calls.

```javascript
fusebill.apiRequest({
  method: 'PUT',
  path: '/some/api/not/wrapped/yet',
  data: { key: 'value' }
})
```

```javascript
 // qs is not part of axios and we use this for custom transformations on query
fusebill.apiRequest({
  method: 'GET',
  path: '/some/api/not/wrapped/yet',
  qs: { query: { someKey: 'someValue'}, pageSize: 100}
})
```

