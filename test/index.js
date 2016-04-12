'use strict'

var test = require('tape')

test('app', function (t) {
  t.plan(1)
  t.equal(global.app.thing.hello.world.val, 'Hello World!')
})
