'use strict'

require('./global.less')

var App = require('vigour-element/lib/app')
var app = new App({
  node: document.body
})
var Element = require('vigour-element')
var ui = require('vigour-uikit')
var TextElement = require('vigour-uikit/lib/text/element')
var Button = require('vigour-uikit/lib/form/button')

var env = require('vigour-env')
var orientation = require('vigour-orientation')
var statusBar = require('vigour-statusbar')
var facebook = require('vigour-facebook')

orientation.on('data', function (currentOrientation) {
  console.log('orientation', currentOrientation)
})

statusBar.val = true

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

var orientationTester = new Element({
  title: new ui.H3('vigour-orientation'),
  orientation: new TextElement({
    text: orientation
  })
})

var statusBarTester = new Element({
  title: new ui.H3('vigour-statusbar'),
  toggle: new Button({
    text: 'toggle status bar',
    on: {
      click: function () {
        if (statusBar.display.val === 'top') {
          console.log('setting hidden')
          statusBar.display.val = 'hidden'
        } else {
          console.log('setting top')
          statusBar.display.val = 'top'
        }
      }
    }
  })
})

var facebookTester = new Element({
  title: new ui.H3('vigour-facebook'),
  share: new Button({
    text: 'Share via facebook',
    on: {
      click: function () {
        facebook.share.once(function () {
          console.log('Done sharing')
        })
        facebook.share.val = 'http://perdu.com'
      }
    }
  })
})

var pluginTester = new Element({
  title: new ui.H2('Plugin tester'),
  env: envTester,
  orientation: orientationTester,
  statusBar: statusBarTester,
  facebook: facebookTester
})

app.set({
  banner: new ui.H1('Vigourous Example App!'),
  pluginTester: pluginTester
})
