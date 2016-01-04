'use strict'

require('./global.less')

var ui = require('vigour-uikit')
var Element = ui.Element

// var env = require('vigour-env')

var App = require('vigour-element/lib/app')
var app = new App({
  node: document.body,
  container: new ui.Container({
    title: new ui.H1('Vigourous Example App!')
  })
})

var PluginTester = new Element({
  title: new ui.H2('Plugin tester')
}).Constructor

var EnvTester = new Element({
  title: new ui.H2('Env tester'),

  paused: new Element({
    text: env.paused
  })
}).Constructor

app.set({
  container: {
    plugin: new PluginTester(),
    env: new EnvTester()
  }
})
