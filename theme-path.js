const path = require('path')
const detectInstalled = require('detect-installed')
const config = require('./config.json')

if (detectInstalled.sync(config.theme, { local: true })) {
  themePath = path.resolve(__dirname, './node_modules/' + config.theme)
} else {
  themePath = path.resolve(__dirname, './themes/' + config.theme)
}

module.exports = themePath