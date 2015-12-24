var Element = require('vigour-element')
module.exports = exports = new Element({
  ChildConstructor: 'Constructor',
  inject: [
    require('vigour-element/lib/property/attributes'),
    require('vigour-element/lib/property/style'),
    require('vigour-element/lib/property/size'),
    require('vigour-element/lib/property/text'),
    require('vigour-element/lib/events/click')
  ]
})
