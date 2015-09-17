require('./global.less')
// var statusBar = require('vigour-native-statusBar')

// function showStatusBar () {
//   statusBar.set({visibility: true})
// }

// function hideStatusBar () {
//   statusBar.set({visibility: false})
// }

/*
function msg () {
  var l = arguments.length
  var i
  var str
  var body = document.getElementsByTagName('body')[0]
  var p
  for (i = 0; i < l; i += 1) {
    try {
      str = JSON.stringify(arguments[i], null, 2)

      if (str === '{}' ||
        str === '[object Object]' ||
        str === '[object Array]') {
        throw new Error('Stringifying makes value useless')
      }
    } catch (e) {
      str = arguments[i].toString()
    }

    p = document.createElement('p')
    var tN = document.createTextNode(str)
    p.appendChild(tN)
    body.appendChild(p)
  }
}
*/
