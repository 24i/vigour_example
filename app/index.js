'use strict'

var e = require('vigour-element/e')
var document = require('global/document')

var thing = require('../lib')

global.app = e({
  DOM: document.body,
  thing
})
