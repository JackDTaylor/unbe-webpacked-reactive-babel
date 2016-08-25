var Webpack = require('webpack');
var pathsConfig = require('./config/paths.config');

//noinspection JSUnresolvedFunction
var config = {
	name: "server-side js",
	devtool: 'source-map',
	entry: [
		'./backend.js',
	],
	output: {
		path: pathsConfig.assets,
		filename: 'backend.js',
		libraryTarget: "commonjs2",
		publicPath: pathsConfig.assetsUrl
	},
	plugins: [
		new Webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/
			}
		]
	}
};

module.exports = config;