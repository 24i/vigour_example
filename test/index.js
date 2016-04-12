'use strict'

// Css to override the component default
require('./style.css')

var e = require('vigour-element/e')

var app = global.app = e({
  DOM: document.body,
  components: [ require('../lib') ],
  thing: { type: 'thing' },
  message: {
    text: 'In this context, thing should be red'
  }
})
