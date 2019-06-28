import React from 'react';
import { connect } from 'react-redux';
import { Delete_Inmate } from '../actions/Prisoners';
import DeleteButton from './DeleteBtn';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';const Prisoner = props => {
	const { name, id, work_release, skills } = props.inmate;
	return (
		<Fade left>
		<div  style={{margin:'5% 9%'}} className='ui container'>
			<table className='ui inverted blue table  '>
				<thead className='ui four column grid'>
					<tr className=' row'>
						<th className='column'>Name</th>
						<th className='column'>Id</th>
						<th className='column'>Work Release</th>
						<th className='column'>Skills</th>
					</tr>
				</thead>
				<tbody className='ui four column grid'>
					<tr className=' row'>
						<td className='column'>{name}</td>
						<td className='column'>{id}</td>
						<td className='column'>{work_release === 0 ? 'true' : 'false'}</td>
						<td className='column'>{skills}</td>
						<td className='column'>
							{' '}
							<DeleteButton inmateIds={id} />{' '}
						</td>
						<td className='column'>
							{' '}
							<Link className='button ui basic green' to={`/MainAdmin/UpdateInmate/${id}`}> update</Link>{' '}
						</td>
					</tr>
				</tbody>
			</table>
		</div></Fade>
	);
};

export default connect(null, { Delete_Inmate })(Prisoner);
