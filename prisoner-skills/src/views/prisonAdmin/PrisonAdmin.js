import React from 'react';
import Prisoners from '../../components/Prisoners';
import { Link } from 'react-router-dom';
import PrisonLogin from '../PrisonLogin';
import Homepage from '../general/Homepage';

const PrisonAdmin = () => {
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
			<Prisoners />
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default PrisonAdmin;
