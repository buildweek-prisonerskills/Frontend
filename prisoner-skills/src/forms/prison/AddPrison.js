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
			<h1>AddPrison</h1>
				<form style={{display:'flex',justifyContent:'center',flexDirection:'column'}} className='ui form' onSubmit={this.onSubmitHandle}>
				<div className="two fields">
				<div className='field'>
					<input
						onChange={this.onInputChange}
						placeholder='Prison Name'
						value={this.state.name}
						name='name'
						type='text'
					/></div>
					<div className='field'>
					<input
						onChange={this.onInputChange}
						placeholder='location'
						value={this.state.location}
						name='location'
						type='text'
					/></div>
					<button className='ui button green'>Add a Prison</button>
			</div>	</form>
			</div>
		);
	}
}

export default connect(null, { Add_Prison })(AddPrison);
