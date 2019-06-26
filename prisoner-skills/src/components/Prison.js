import React from 'react';
import { connect } from 'react-redux';
import { Delete_Prison } from '../actions/Prisoners';
import DeletePrison from './DeleteBtn';

const Prison = props => {
	const { name, id, availability, address } = props.prison;
	console.log(props);
	return (
		<div className='ui container'>
			<table className='ui inverted blue table  '>
				<thead className='ui four column grid'>
					<tr className=' row'>
						<th className='column'>Name</th>
						<th className='column'>Address</th>
						<th className='column'>Number of Prisoners</th>
					</tr>
				</thead>
				<tbody className='ui four column grid'>
					<tr className=' row'>
						<td className='column'>{name}</td>
						<td className='column'>{id}</td>
						<td className='column'>{availability}</td>
						<td className='column'>{address}</td>
						<td className='column'>
							{' '}
							<DeletePrison prisonIds={id} />{' '}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default connect(null, { Delete_Prison })(Prison);
