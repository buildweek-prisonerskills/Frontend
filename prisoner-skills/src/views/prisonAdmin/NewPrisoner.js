import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PrisonLogin from './PrisonLogin';
import PrisonAdmin from './PrisonAdmin';
import { Add_Inmate } from '../../actions/Prisoners';
import { connect } from 'http2';

class NewPrisoner extends Component {
	state = {
		name         : '',
		work_release : '',
		availability : '',
		address      : '',
	};

	onhandleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleAddPrisoner = e => {
		e.preventDefault();

		const Inmate = this.state;
		this.props.Add_Inmate(Inmate);
		this.setState({ name: '', work_release: '', availability: '', address: '' });
	};

	render() {
		return (
			<div>
				<nav>
					<Link to='/prisonerlogin' component={PrisonLogin}>
						Logout
					</Link>
					<Link to='/prisonAdmin' component={PrisonAdmin}>
						Prisoners
					</Link>
				</nav>
				<h1>Add a Prisoner</h1>
				<form>
					Prisoner Name: {''}
					<input onChange={this.onhandleChange} type='text' name='name' value={this.state.name} />
					Work Release: {''}
					<input
						onChange={this.onhandleChange}
						type='text'
						name='workRelease'
						value={this.state.work_release}
					/>
					Availability: {''}
					<input
						onChange={this.onhandleChange}
						type='text'
						name='availability'
						value={this.state.availability}
					/>
					Address: {''}
					<input onChange={this.onhandleChange} type='text' name='address' value={this.state.address} />
					<button>Create Prisoner</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		prisoners : state.prisoners,
	};
};

export default connect(mapStateToProps, { Add_Inmate })(NewPrisoner);
