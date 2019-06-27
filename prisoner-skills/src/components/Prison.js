import React from 'react';
import { connect } from 'react-redux';
import { Delete_Prison } from '../actions/Prisons';
import DeletePrison from './DeletePrison';

const Prison = props => {
	const { name, id,  location } = props.prison;
	console.log('Almost Fixed', props.prisoner.prisoners);

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
						<td className='column'>{location}</td>
						<td className='column'>{ id === props.prisoner.facility_id ? props.prisoner.facility_id.length: 0 } </td>

						<td className='column'>
							{' '}
							<DeletePrison prisonIds={id} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default connect(null, { Delete_Prison })(Prison);

