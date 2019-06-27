import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Add_Prison } from '../../actions/Prisons';
class AddPrison extends Component {
	state = {
		id                : Date.now(),
		name              : '',
		available_inmates : '',
		location          : '',
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmitHandle = e => [ e.preventDefault(), this.props.Add_Prison(this.state), document.location.reload() ];

	render() {
		return (
			<div className='PrisonForm'>
				<form onSubmit={this.onSubmitHandle}>
					<input
						onChange={this.onInputChange}
						placeholder='Prison Name'
						value={this.state.name}
						name='name'
						type='text'
					/>
					<input
						onChange={this.onInputChange}
						placeholder='location'
						value={this.state.location}
						name='location'
						type='text'
					/>
					<button>Add a Prison</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { Add_Prison })(AddPrison);
