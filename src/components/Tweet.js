import React, { Component } from 'react';

class Tweet extends Component {
	isUnicode(str) {
		var letters = [];
		for (var i = 0; i <= str.length; i++) {
			letters[i] = str.substring((i - 1), i);
			if (letters[i].charCodeAt() > 255) { return true; }
		}
		return false;
	}

	persian(str) {
		let value = str.toString();
		const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
		for (let i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
			value = value.replace(new RegExp(englishNumbers[i], 'g'), persianNumbers[i]);
		}
		return value;
	}

	render() {
		return (
			<li className="tweet" data-lang={this.props.lang}>
				<div className="figure_right_image">
					<img src={this.props.avatar} alt={this.props.name} />
				</div>
					<div className="figure_contain">
						<h4 className="title">
							<span dir={this.isUnicode(this.props.name) ? "rtl" : "ltr"}>
								{this.props.name}
							</span>
							<span className="diff-time">{this.props.diff_time}</span>
							<span className="username">@{this.props.username}</span>
						</h4>
						<p>{this.props.text}</p>
						<div className="footer">
							<span className="favorite_count">
								<i className="icon-favorite"></i>
								{this.persian(this.props.favorite_count)}
							</span>
							<span className="retweet_count">
								<i className="icon-retweet"></i>
								{this.persian(this.props.retweet_count)}
							</span>
						</div>
				</div>
			</li>
		);
	}
}

export default Tweet;
