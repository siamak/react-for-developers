import React, { Component, PropTypes } from 'react';

class Spin extends Component {
	render() {
		return (
			<i className={(this.props.state) ? 'spin' : ''}></i>
		);
	}
}

Spin.propTypes = {
	state: PropTypes.bool.isRequired,
};

export default Spin;
