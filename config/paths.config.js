var Path = require('path');

var config = {};

config.baseUrl = '/';
config.base = Path.dirname(__dirname);

config.assetsUrl = '/assets/';
config.assets = Path.join(config.base, config.assetsUrl);

module.exports = config;