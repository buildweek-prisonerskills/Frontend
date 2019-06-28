import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_Prison } from '../../actions/Prisons';
import { GET_Inmate } from '../../actions/Prisoners';
import Prison from './PrisonHome';
import navHome from '../../components/nav/navHome'
import {Route} from 'react-router-dom'

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
			<div  className="pusher">
		<div className="ui  vertical masthead center aligned segment">

		<Route  component={navHome}/>


	<div className="ui text container">
			
				{this.props.prisons.prisons.map((prison, I) => {
					return <Prison key={I}  prison={prison} />;
				})}



				</div>


			</div>
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
