try {
	var Path = require('path');
	var Express = require('express');
	var Webpack = require('webpack');

	var paths = require('./config/paths.config');
	var Backend = require('./assets/backend');

	var frontendConfig = require('./config/webpack.config.dev.js');

	var port = 3000;
	var app = Express();

	var frontendCompiler = Webpack(frontendConfig);

	// Register frontend
	app.use(require('webpack-dev-middleware')(frontendCompiler, {
		noInfo: true,
		publicPath: frontendConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(frontendCompiler));

	/**
	 * Routes
	 */

	// Test route
	app.get('/stdio-test', function (req, res) {
		res.send(Backend.serve());
	});

	// Fallback
	app.get('*', function (req, res) {
		res.sendFile(Path.join(__dirname, 'index.html'));
	});

	// StЧart the server
	app.listen(port, function onAppListening(err) {
		if (err) {
			console.error(err);
		} else {
			console.info('==> Webpack development server listening on port %s', port);
		}
	});
} catch(error) {
	console.error("Error occured!");
	console.log(error);
}