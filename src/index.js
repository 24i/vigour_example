'use strict'

require('./global.less')

var App = require('vigour-element/lib/app')
var app = new App({
  node: document.body
})
// var Element = require('vigour-element')
var ui = require('vigour-uikit')

// var statusBar = require('vigour-statusbar')
// var env = require('vigour-env')

// var envTester = new Element({
//   title: new ui.H2('vigour-env'),
//   deviceName: new ui.Button({
//     term: {
//       text: 'device.name'
//     },
//     def: {
//       text: env.device.name
//     }
//   }),
//   deviceVersion: new ui.Button({
//     term: {
//       text: 'device.version'
//     },
//     def: {
//       text: env.device.version
//     }
//   }),
//   platformName: new ui.Button({
//     term: {
//       text: 'platform.name'
//     },
//     def: {
//       text: env.platform.name
//     }
//   }),
//   platformVersion: new ui.Button({
//     term: {
//       text: 'platform.version'
//     },
//     def: {
//       text: env.platform.version
//     }
//   }),
//   appId: new ui.Button({
//     term: {
//       text: 'app.id'
//     },
//     def: {
//       text: env.app.id
//     }
//   })
// })
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

// var pluginTester = new Element({
//   title: new ui.H2('Plugin tester'),
//   env: envTester,
//   statusBar: statusBarTester
// })

app.set({
  banner: new ui.H1('Vigourous Example App!')
  // pluginTester: pluginTester
})
