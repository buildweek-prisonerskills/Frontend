import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_Prison } from '../../actions/Prisons';
import { GET_Inmate } from '../../actions/Prisoners';
import Prison from './PrisonHome';

import NavPrison from '../../components/nav/navPrison';

class Prisons extends Component {
	static propTypes = {
		prop : PropTypes.string,
	};

	componentDidMount() {
		this.props.GET_Prison();this.props.GET_Inmate()
	}

	render() {
		console.log('hello',this.props.prisoner)
		return (
			<div>
				<NavPrison />
				{this.props.prisons.prisons.map((prison, I) => {
					return <Prison key={I} prison={prison} prisoner={this.props.prisoner} />;
				})}
			
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

export default connect(mapStateToProps, { GET_Prison ,GET_Inmate})(Prisons);
