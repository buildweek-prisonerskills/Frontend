import React from 'react';
import { connect } from 'react-redux';
import { Delete_Prison } from '../actions/Prisons';
const DeletePrison = props => {
	console.log('deletebtn', props);
	return (
		<div>
			<button
				className='ui basic red button'
				onClick={() => {
					props.Delete_Prison(props);
				}}>
				Delete
			</button>
		</div>
	);
};

export default connect(null, { Delete_Prison })(DeletePrison);
