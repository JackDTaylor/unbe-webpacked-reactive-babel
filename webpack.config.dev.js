var path = require('path');
var webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./app.js',
		'webpack-hot-middleware/client'
	],
	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
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