'use strict'

require('./global.less')

var ui = require('uikit')
var Element = require('element')
Element.prototype.inject(
  require('element/lib/property/text')
)

var statusBar = require('status-bar')
var env = require('env')

var app = new Element({
  node: document.body
})

var envTester = new Element({
  title: new ui.Header[2]({
    text: 'env'
  }),
  deviceName: new ui.Dl({
    term: {
      text: 'device.name'
    },
    def: {
      text: env.device.name
    }
  }),
  deviceVersion: new ui.Dl({
    term: {
      text: 'device.version'
    },
    def: {
      text: env.device.version
    }
  }),
  platformName: new ui.Dl({
    term: {
      text: 'platform.name'
    },
    def: {
      text: env.platform.name
    }
  }),
  platformVersion: new ui.Dl({
    term: {
      text: 'platform.version'
    },
    def: {
      text: env.platform.version
    }
  }),
  appId: new ui.Dl({
    term: {
      text: 'app.id'
    },
    def: {
      text: env.app.id
    }
  })
})
//
var statusBarTester = new Element({
  title: new ui.Header[2]({
    text: 'status-bar'
  }),
  'display': new ui.Input({
    input: {
      text: statusBar.display
    }
  }),
  'background color': new ui.Input({
    text: 'statusBar.background.color'
  }),
  'background opacity': new ui.Input({
    text: 'statusBar.background.opacity'
  }),
  'foreground color': new ui.Input({
    text: 'statusBar.foreground.color'
  }),
  'foreground opacity': new ui.Input({
    text: 'statusBar.foreground.opacity'
  })
})

var pluginTester = new Element({
  title: new ui.Header[1]({
    text: 'Plugin tester'
  }),
  env: envTester,
  statusBar: statusBarTester
})

app.set({
  pluginTester: pluginTester
})
