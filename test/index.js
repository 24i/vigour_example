'use strict'

var e = require('vigour-element/e')

var app = global.app = e({
  DOM: document.body,
  components: [ require('../lib') ],
  thing: { type: 'thing' }
})
