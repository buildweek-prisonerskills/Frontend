import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPrisoner } from 'react-redux';

class PrisonerForm extends Component {
	state = {
		name               : '',
		availability       : '',
		skills             : '',
		previousExperience : '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleAddPrisoner = e => {
		e.preventDefault();

		const prisoner = this.state;
		this.props.addPrisoner(prisoner);

		this.setState({
			name               : '',
			availability       : '',
			skills             : '',
			previousExperience : '',
		});
	};

	render() {
		return (
			<div className='PrisonerForm'>
				<form onSubmit={this.handleAddPrisoner}>
					<input onChange={this.handleInputChange} placeholder='Name' value={this.state.name} name='name' />
					<input
						onChange={this.handleInputChange}
						placeholder='Availability'
						value={this.state.availability}
						name='availability'
					/>
					<input
						onChange={this.handleInputChange}
						placeholder='Skills'
						value={this.state.skills}
						name='skills'
					/>
					<input
						onChange={this.handleInputChange}
						placeholder='Previous Experience'
						value={this.state.previousExperience}
						name='previous experience'
					/>
					<button type='submit'>Add a Prisoner</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    prisoners: state.prisoners,
})

export default connect(mapStateToProps, { addPrisoner })(PrisonerForm)
