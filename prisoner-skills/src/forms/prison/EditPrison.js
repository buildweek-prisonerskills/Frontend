import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Update_Prison } from '../../actions/Prisons';

class EditPrison extends Component {
	state = {
		name              : '',
		id                : Date.now(),
		available_inmates : '',
		location          : '',
	};

	onInputChange = e => {
		this.setState({ [e.currentTarget.name]: e.currentTarget.value });
	};

	onSubmitHandle = e => [ e.preventDefault(), console.log(this.state), this.props.Update_Prison(this.state) ];

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandle}>
					<div>
						<input type='text' onChange={this.onInputChange} name='name' value={this.state.name} />
					</div>

					<div className='field'>
						{' '}
						<input onChange={this.onInputChange} name='location' value={this.state.location} />
					</div>

					<button>Update</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { Update_Prison })(EditPrison);
