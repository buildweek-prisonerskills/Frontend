import React from 'react';
import { connect } from 'react-redux';
import { Delete_Prison } from '../actions/Prisons';
const DeletePrison = props => {
	console.log('delete button', props.prisonIds);
	return (
		<div>
			<button
				className='ui basic red button'
				onClick={() => {
					props.Delete_Prison(props.prisonIds);
				}}>
				Delete
			</button>
		</div>
	);
};

export default connect(null, { Delete_Prison })(DeletePrison);
