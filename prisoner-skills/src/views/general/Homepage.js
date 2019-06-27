
import React from 'react';
import PrisonsHome from '../general/PrisonsHome';
//import Inmate from '../general/inmatesHome'
import { Link,Route } from 'react-router-dom';
//import PrisonLogin from '../PrisonLogin';
const Homepage = () => {
	return (
		<div>
				<div className='ui large top fixed hidden menu'>
				<div className='ui container'>
					
					<Link to='/inmatesHome'>
						<a className='item'>Inmates</a>
					</Link>
					<Link to='/prisonsHome'>
						<a className='active item'>Prisons</a>
					</Link>
					<div className='right menu'>
						<div className='item'>
							<Link to='/login' className='ui button'>
								Prison Login
							</Link>
						</div>
						<div className='item'>
							<Link to='/signUp' className='ui primary button'>
								Prison Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Route path='/prisonsHome' component={PrisonsHome} />
			
		</div>
	);
};

export default Homepage;
