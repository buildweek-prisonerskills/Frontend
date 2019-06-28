import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_Prison } from '../actions/Prisons';

import Prison from './Prison';
import { Link } from 'react-router-dom';
import AddPrison from '../forms/prison/AddPrison';
//import NavPrison from '../components/nav/navPrison';

class Prisons extends Component {
	static propTypes = {
		prop : PropTypes.string,
	};

	componentDidMount() {
		this.props.GET_Prison()
	}

	render() {
		console.log('hello',this.props.prisoner)
		return (
			<div>
					<div >
			
			</div>
				{this.props.prisons.prisons.map((prison, I) => {
					return <Prison key={I} prison={prison} prisoner={this.props.prisoner} />;
				})}
				<AddPrison />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('object',state)
	return {
		prisons : state.prison,
		prisoner:state.prisoners
		
	};
};

export default connect(mapStateToProps, { GET_Prison })(Prisons);
