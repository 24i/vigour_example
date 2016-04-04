'use strict'

var e = require('vigour-element/e')
var thing = require('../lib')

var app = global.app = e({
  DOM: document.body,
  thing
})
