import { connect } from 'react-redux';
import { getPrisoners } from '../actions';
import React, { Component } from 'react';

class Prisoners extends Component {
	componentDidMount() {
		this.props.getPrisoners();
	}

	render() {
		return (
			<div>
				{this.props.prisoners &&
					this.props.prisoners.map(prisoner => (
						<div>
							<h1>{prisoner.name}</h1>
							<h1>{prisoner.availability}</h1>
							<h1>{prisoner.skills}</h1>
							<h1>{prisoner.previousExperience}</h1>
						</div>
					))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		prisoners : state.prisoners,
	};
};

export default connect(mapStateToProps, { getPrisoners })(Prisoners);
