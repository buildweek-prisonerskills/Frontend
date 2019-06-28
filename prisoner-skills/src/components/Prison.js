import React from 'react';
import { connect } from 'react-redux';
import { Delete_Prison } from '../actions/Prisons';
import DeletePrison from './DeletePrison';
import {Link} from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';
const Prison = props => {
	const { name, id,  location } = props.prison;
	console.log('Almost Fixed', props.prisoner.prisoners);

	return (
		<Rotate bottom right>
		<div  style={{margin:'5% 9%'}} className='ui container '>
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
<DeletePrison prisonIds={id} />
						<td className='column'>
							{' '}
							
							<Link className='button ui basic green' to={`/MainAdmin/${id}`}> update</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div></Rotate>
	);
};

export default connect(null, { Delete_Prison })(Prison);

