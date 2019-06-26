import React from 'react';
import { connect } from 'react-redux';
import { Update_Prison } from '../actions/Prisons';
const UpdatePrBtn = props => {
	console.log('Update button', props.prison);
	const { prison } = props;
	return (
		<div>
			<button
				className='ui basic red button'
				onClick={() => {
					props.Update_Prison(prison);
				}}>
				Update
			</button>
		</div>
	);
};

export default connect(null, { Update_Prison })(UpdatePrBtn);
