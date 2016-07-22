import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="row">
					<div className="brand">
						<h2>
							<i className="icon-twitter"></i>
							توییتر
						</h2>
					</div>
					<div className="search">
						توییت‌های:
						<code>#irDevConf</code>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;
