import React from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';

export default class Page extends React.Component {
	render() {
		return (
			<div>
				<PageHeader />
				content
				< PageFooter />
			</div>
		);
	}
}