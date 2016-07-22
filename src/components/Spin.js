import React, { Component } from 'react';

class Spin extends Component {
	render() {
		return (
			<i className={(this.props.state) ? "spin" : ""}></i>
		);
	}
}

export default Spin;
