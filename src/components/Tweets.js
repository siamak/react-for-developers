import React, { Component } from 'react';

import Tweet from './Tweet';
import Spin from './Spin';

import connect from '../modules/connection';

class Tweets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			colors: [],
			loading: true,
		};
	}
	componentWillMount() {
		connect.then((res) => {
			this.setState({
				data: res.data,
				loading: false,
			});
		}).catch((err) => {
			throw new Error(err);
		});
	}

	render() {
		return (
			<section className="tweet__list">
				<ul>
					{
						this.state.data.map((item, i) => {
							if (item.lang !== 'und' && !item.retweeted_status) {
								return (
									<Tweet
										key={i}
										name={item.user.name}
										lang={item.lang}
										username={item.user.screen_name}
										avatar={item.user.profile_image_url_https}
										diff_time={item.from_now}
										retweet_count={item.retweet_count}
										favorite_count={item.favorite_count}
										text={item.text}
									/>
								);
							}
						})
					}
				</ul>
				<Spin state={this.state.loading} />
			</section>
		);
	}
}

export default Tweets;
