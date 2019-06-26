import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_Prison } from '../actions/Prisons';
import Prison from './Prison';
class Prisons extends Component {
	static propTypes = {
		prop : PropTypes.string,
	};

	componentDidMount() {
		this.props.GET_Prison();
	}

	render() {
		console.log('HELP', this.props);
		return (
			<div>
				{this.props.prisons.prisons.map(prison => {
					return <Prison key={prison.id} prison={prison} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('HELP PLS', state);
	return {
		prisons : state.prison,
	};
};

export default connect(mapStateToProps, { GET_Prison })(Prisons);
