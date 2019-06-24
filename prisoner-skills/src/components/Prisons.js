import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_Prison } from '../actions/Prisons';
class Prisons extends Component {
	static propTypes = {
		prop : PropTypes.string,
	};

	componentDidMount() {
		this.props.GET_Prison();
	}

	render() {
		return <div />;
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		prisons : state.prisons,
	};
};

export default connect(mapStateToProps, { GET_Prison })(Prisons);
