import React, { Component } from 'react';
import { Link } from 'react-router';


import Header from './Header';
import Tweets from './Tweets';
import Footer from './Footer';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	render() {
		return (
			<div>
				<main>
					<div className="wrapper">
						<section className="body">
							<Header />
							<Tweets />
						</section>
					</div>
					<Footer />
				</main>
				{this.props.children}
			</div>
		);
	}
}

export default Main;
