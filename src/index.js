'use strict'

require('./global.less')

var App = require('vigour-element/lib/app')
var app = new App({
  node: document.body
})
var Element = require('vigour-element')
var ui = require('vigour-uikit')
var TextElement = require('vigour-uikit/lib/text/element')
// var statusBar = require('vigour-statusbar')
var env = require('vigour-env')

var envTester = new Element({
  title: new ui.H3('vigour-env'),
  paused: new TextElement({
    text: env.paused
  }),
  button: new TextElement({
    text: env.button
  }),
  bundleId: new TextElement({
    text: env.bundleId
  }),
  country: new TextElement({
    text: env.country
  }),
  language: new TextElement({
    text: env.language
  }),
  region: new TextElement({
    text: env.region
  }),
  timezone: new TextElement({
    text: env.timezone
  }),
  model: new TextElement({
    text: env.model
  }),
  os: new TextElement({
    text: env.os
  }),
  osVersion: new TextElement({
    text: env.osVersion
  }),
  appVersion: new TextElement({
    text: env.appVersion
  }),
  network: new TextElement({
    text: env.network
  }),
  platform: new TextElement({
    text: env.platform
  }),
  browser: new TextElement({
    text: env.browser
  }),
  device: new TextElement({
    text: env.device
  }),
  isNative: new TextElement({
    text: env.isNative
  }),
  isWeb: new TextElement({
    text: env.isWeb
  }),
  isMock: new TextElement({
    text: env.isMock
  }),
  ready: new TextElement({
    text: env.ready
  })
})
//
// var statusBarTester = new Element({
//   title: new ui.H2('vigour-statusbar'),
//   'display': new ui.Input({
//     text: statusBar.display
//   }),
//   'background color': new ui.Input({
//     text: 'statusBar.background.color'
//   }),
//   'background opacity': new ui.Input({
//     text: 'statusBar.background.opacity'
//   }),
//   'foreground color': new ui.Input({
//     text: 'statusBar.foreground.color'
//   }),
//   'foreground opacity': new ui.Input({
//     text: 'statusBar.foreground.opacity'
//   })
// })

var pluginTester = new Element({
  title: new ui.H2('Plugin tester'),
  env: envTester
//   statusBar: statusBarTester
})

app.set({
  banner: new ui.H1('Vigourous Example App!'),
  pluginTester: pluginTester
})
