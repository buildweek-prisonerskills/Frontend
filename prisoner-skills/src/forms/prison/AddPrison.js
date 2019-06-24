import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPrison } from 'react-redux';

class PrisonForm extends Component {
	state = {
		name         : '',
		work_release : '',
		skills       : '',
		facility_id  : '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleAddPrison = e => {
		e.preventDefault();

		const prison = this.state;
		this.props.addPrison(prison);

		this.setState({
			name         : '',
			work_release : '',
			skills       : '',
			facility_id  : '',
		});
	};

	render() {
		return (
			<div className='PrisonForm'>
				<form onSubmit={this.handleAddPrison}>
					<input onChange={this.handleInputChange} placeholder='Name' value={this.state.name} name='name' />
					<input
						onChange={this.handleInputChange}
						placeholder='Work Release'
						value={this.state.work_release}
						name='work release'
					/>
					<input
						onChange={this.handleInputChange}
						placeholder='Skills'
						value={this.state.skills}
						name='skills'
					/>
					<button type='submit'>Add a Prison</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	prisons : state.prisons,
});

export default connect(mapStateToProps, { addPrison })(PrisonForm);
