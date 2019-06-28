import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavPrisoner extends Component {
	render() {
		console.log('priosn.js history', this);
		return (
			<div className='ui large  '>
				<div className='ui container'>
					{/* <Link to='/'>
						<a className='item'>Home</a>
					</Link> */}
					<Link exact to='/inmates'>
						<a className='active item'>Inmates</a>
					</Link>
					<Link exact to='/prisons'>
						<a className='item'>Prisons</a>
					</Link>
					<div className='right menu'>
						<div className='item'>
							<Link exact to='/login' className='ui button'>
								Prison Login
							</Link>
						</div>
						<div className='item'>
							<Link exact to='/signUp' className='ui primary button'>
								Prison Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavPrisoner;
