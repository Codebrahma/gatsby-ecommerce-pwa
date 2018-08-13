const path = require('path')
const detectInstalled = require('detect-installed')
const config = require('./config.json')

let themePath = path.resolve(__dirname, './themes/' + config.theme)
module.exports = themePath
