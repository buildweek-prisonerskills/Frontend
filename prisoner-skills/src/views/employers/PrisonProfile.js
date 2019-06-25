import React from 'react';
import Prisoners from '../../components/Prisoners';
import { Link } from 'react-router-dom';
import PrisonLogin from '../PrisonLogin';
import Homepage from '../general/Homepage';

const PrisonProfile = () => {
	return (
		<div>
			<nav>
				<Link to='/prisonerlogin' component={PrisonLogin}>
					Prison Administration Login
				</Link>
				<Link to='/prisons' component={Homepage}>
					Prisons
				</Link>
			</nav>
			<Prisoners />
		</div>
	);
};

export default PrisonProfile;
