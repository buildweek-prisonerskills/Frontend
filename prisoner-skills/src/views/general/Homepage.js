import React from 'react';
//import Prisons from '../../components/Prisons';
import { Link } from 'react-router-dom';
//import PrisonLogin from '../PrisonLogin';
const Homepage = () => {
	return (
		<div>
			{/*<nav>
				<Link to='/prisonlogin' component={PrisonLogin}>
					Prison Administration Login
				</Link>
				<Link to='/prisons' component={Homepage}>
					Prisons
				</Link>
			</nav>
			*/}
			<div class='ui large top fixed hidden menu'>
				<div class='ui container'>
					<Link to='/' class='active item'>
						Home
					</Link>
					<Link to='/inmates'>
						<a class='item'>Inmates</a>
					</Link>
					<Link to='/'>
						<a class='item'>Prisons</a>
					</Link>
					<a class='item'>Careers</a>
					<div class='right menu'>
						<div class='item'>
							<Link to='/login' class='ui button'>
								Prison Login
							</Link>
						</div>
						<div class='item'>
							<Link to='/signUp' class='ui primary button'>
								Prison Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;

