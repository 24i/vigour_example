require('./global.less')
var statusBar = require('status-bar')
var Element = require('element/lib/element')
var app = require('element/lib/app')

Element.prototype.inject(
  require('element/lib/property/text'),
  require('element/lib/events/click')
)

var Title = new Element({
  node: 'h3'
}).Constructor

var Input = new Element({
  label: {
    node: 'label'
  },
  input: {
    node: 'input',
    on: {
      keyup: function () {
        var myPath = this.path.slice(3, -1).join('.')
        statusBar.setWithPath(myPath, this.node.value)
      }
    }
  }
}).Constructor

var statusBarTester = new Element({
  title: new Title({
    text: 'status-bar'
  }),
  display: new Input({
    label: {
      text: 'display'
    }
  }),
  background: {
    color: new Input({
      label: {
        text: 'background.color'
      }
    }),
    opacity: new Input({
      label: {
        text: 'background.opacity'
      }
    })
  },
  foreground: {
    color: new Input({
      label: {
        text: 'foreground.color'
      }
    }),
    opacity: new Input({
      label: {
        text: 'foreground.opacity'
      }
    })
  }
})

var pluginTester = new Element({
  title: new Title({
    text: 'Plugin tester'
  }),
  statusBar: statusBarTester
})

app.set({
  pluginTester: pluginTester
})
