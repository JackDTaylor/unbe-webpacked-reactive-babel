import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Page from './app/markup/page';

export default class Backend {
	static serve() {
		return ReactDOMServer.renderToString(
			<div>
				<h1>RCTS</h1>
				<Page/>
			</div>
		);
	}
};