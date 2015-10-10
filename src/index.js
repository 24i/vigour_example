require('./global.less')
var statusBar = require('status-bar')
var env = require('env')
console.log('env', env)
var Element = require('element/lib/element')

var Observable = require('vjs/lib/observable')
Observable.prototype.inject(require('vjs/lib/operator/subscribe'))

var app = new Element({
  node: document.body
})

Element.prototype.inject(
  require('element/lib/property/text'),
  require('element/lib/events/click')
)

var Header = {}

for (var i = 1; i <= 6; i += 1) {
  Header[i] = new Element({
    node: 'h' + i
  }).Constructor
}

var Dl = new Element({
  dl: {
    node: 'dl',
    term: {
      node: 'dt'
    },
    definition: {
      node: 'dd'
    }
  }
}).Constructor

var Input = new Dl({
  dl: {
    term: {
      label: {
        node: 'label'
      }
    },
    definition: {
      input: {
        node: 'input',
        on: {
          keyup: function () {
            var myPath = this.path.slice(3, -1).join('.')
            statusBar.setWithPath(myPath, this.node.value)
          }
        }
      }
    }
  }
}).Constructor

var envTester = new Element({
  title: new Header[2]({
    text: 'env'
  }),
  deviceName: new Dl({
    dl: {
      term: {
        text: 'device.name'
      },
      definition: {
        text: env.device.name
      }
    }
  }),
  deviceVersion: new Dl({
    dl: {
      term: {
        text: 'device.version'
      },
      definition: {
        text: env.device.version
      }
    }
  }),
  platformName: new Dl({
    dl: {
      term: {
        text: 'platform.name'
      },
      definition: {
        text: env.platform.name
      }
    }
  }),
  platformVersion: new Dl({
    dl: {
      term: {
        text: 'platform.version'
      },
      definition: {
        text: env.platform.version
      }
    }
  }),
  appId: new Dl({
    dl: {
      term: {
        text: 'app.id'
      },
      definition: {
        text: env.app.id
      }
    }
  })
})

var statusBarTester = new Element({
  title: new Header[2]({
    text: 'status-bar'
  }),
  display: new Input({
    dl: {
      term: {
        label: {
          text: 'display'
        }
      }
    }
  }),
  backgroundColor: new Input({
    dl: {
      term: {
        label: {
          text: 'background.color'
        }
      }
    }
  }),
  backgroundOpacity: new Input({
    dl: {
      term: {
        label: {
          text: 'background.opacity'
        }
      }
    }
  }),
  foregroundColor: new Input({
    dl: {
      term: {
        label: {
          text: 'foreground.color'
        }
      }
    }
  }),
  foregroundOpacity: new Input({
    dl: {
      term: {
        label: {
          text: 'foreground.opacity'
        }
      }
    }
  })
})

var pluginTester = new Element({
  title: new Header[1]({
    text: 'Plugin tester'
  }),
  env: envTester,
  statusBar: statusBarTester
})

app.set({
  pluginTester: pluginTester
})
