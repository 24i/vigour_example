require('./global.less')
// var statusBar = require('vigour-native-statusBar')
var Element = require('element/lib/element')
var app = require('element/lib/app')

Element.prototype.inject(
  require('element/lib/property/text'),
  require('element/lib/events/click')
)

function send (message) {
  window.NativeInterface.send(JSON.stringify(message))
}

var show = new Element({
  $text: 'show statusbar',
  $on: {
    $click: function (event) {
      console.log('show clicked')
      status.$text.$val = 'shown'
      this.$text.$val += '-'
      // statusBar.set({visibility: true})
      send([1, 'statusbar', 'set', {visibility: 'top'}])
      this.$text.$val += '+'
    }
  }
})

var hide = new Element({
  $text: 'hide statusbar',
  $on: {
    $click: function (event) {
      console.log('hide clicked')
      status.$text.$val = 'hidden'
      this.$text.$val += '-'
      // statusBar.set({visibility: false})
      send([1, 'statusbar', 'set', {visibility: 'hidden'}])
      this.$text.$val += '+'
    }
  }
})

var status = new Element({
  $text: 'idle'
})

app.set({
  hide: hide,
  show: show,
  status: status
})

window.pluginstatusbar = statusBar
