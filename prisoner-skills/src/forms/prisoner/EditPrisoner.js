import React, { Component } from 'react';	
import { connect } from 'react-redux';	
import { Update_Inmate, GET_Inmate } from '../../actions/Prisoners';	

 class UpdatePrisoner extends Component {	
	state = {	
		name         : '',	
		facility_id  : Date.now(),	
		work_release : 'False',	
		skills       : '',	
	};	

 	componentDidMount() {	
		this.props.GET_Inmate();	
		const editInmate = this.props.prisoners.prisoners.filter(inmate => {	
			return inmate.id === this.props.match.params.id;	
		});	

 		this.setState({	
			id           : this.props.match.params.id,	
			name         : editInmate.name,	
			facility_id  : editInmate.facility_id,	
			work_release : editInmate.work_release,	
			skills       : editInmate.skills,	
		});	
	}	

 	onInputChange = e => {	
		this.setState({ [e.currentTarget.name]: e.currentTarget.value });	
	};	

 	onSubmitHandle = e => [	
		e.preventDefault(),	
		console.log(this.state),	
		this.props.Update_Inmate(this.state).then(res => {	
			if (res) {	
				this.props.history.push('/inmates');	
			}	
		}),	
	];	

 	render() {	
		console.log('check me', this.props);	
		return (	
			<div>	
				<form onSubmit={this.onSubmitHandle}>	
					<div>	
						<input type='text' onChange={this.onInputChange} name='name' value={this.state.name} />	
					</div>	

 					<div className='field'>	
						{' '}	
						<input onChange={this.onInputChange} name='skills' value={this.state.skills} />	
					</div>	

 					<button>Update</button>	
				</form>	
			</div>	
		);	
	}	
}	

 const mapStateToProps = state => {	
	console.log(state);	
	return {	
		prisoners : state.prisoners,	
	};	
};	

 export default connect(mapStateToProps, { Update_Inmate, GET_Inmate })(UpdatePrisoner);