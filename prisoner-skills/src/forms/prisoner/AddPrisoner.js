import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Add_Inmate } from '../../actions/Prisoners';

class AddPrisoner extends Component {
	state = {
		name         : '',
		facility_id  : Date.now(),
		work_release : '',
		skills       : '',
	};

	onInputChange = e => {
		this.setState({ [e.currentTarget.name]: e.currentTarget.value });
	};

	onSubmitHandle = e => [ e.preventDefault(), this.props.Add_Inmate(this.state), document.location.reload() ];

	render() {
		return (
			<div>
				<form onSubmit={(console.log('Brackets', this.state.work_release), this.onSubmitHandle)}>
					<div>
						<input
							type='text'
							onChange={this.onInputChange}
							name='name'
							value={this.state.name}
							placeholder='Prisoner Name'
						/>
					</div>

					<div className='field'>
						{' '}
						<input
							onChange={this.onInputChange}
							name='workRelease'
							value={this.state.work_release}
							type='text'
							placeholder='Work Release'
						/>
					</div>

					<div className='field'>
						{' '}
						<input
							onChange={this.onInputChange}
							name='skills'
							value={this.state.skills}
							placeholder='Skills'
							type='text'
						/>
					</div>

					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { Add_Inmate })(AddPrisoner);
