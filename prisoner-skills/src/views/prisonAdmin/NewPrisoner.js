import React from 'react';
import { Link } from 'react-router-dom';
import PrisonLogin from './PrisonLogin';
import PrisonAdmin from './PrisonAdmin';

const NewPrisoner = () => {
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
			
		</div>
	);
};

export default NewPrisoner;
