var pathsConfig = require('./paths.config');
var Webpack = require('webpack');

//noinspection JSUnresolvedFunction
var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./frontend.js',
		'webpack-hot-middleware/client'
	],
	output: {
		path: pathsConfig.assets,
		filename: 'bundle.js',
		publicPath: pathsConfig.assetsUrl
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
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