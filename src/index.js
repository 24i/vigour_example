require('./global.less')
var statusBar = require('vigour-native-statusBar')
var Element = require('element/lib/element')

Element.prototype.inject(
  require('element/lib/property/attributes'),
  require('element/lib/property/text')
)

var app = require('element/lib/app')

var show = new Element({
  $node: 'p',
  $text: 'show statusbar',
  $on: {
    $click: function (event) {
      statusBar.set({visibility: true})
    }
  }
})

var hide = new Element({
  $node: 'p',
  $text: 'hide statusbar',
  $on: {
    $click: function (event) {
      statusBar.set({visibility: false})
    }
  }
})

app.set({
  hide: hide,
  show: show
})
