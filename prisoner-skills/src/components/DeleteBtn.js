import React from 'react';
import { connect } from 'react-redux';
import { Delete_Inmate } from '../actions/Prisoners';
const DeleteButton = props => {
	return (
		<div>
			<button
				className='ui basic red button'
				onClick={() => {
					props.Delete_Inmate(props);
				}}>
				Delete
			</button>
		</div>
	);
};

export default connect(null, { Delete_Inmate })(DeleteButton);
