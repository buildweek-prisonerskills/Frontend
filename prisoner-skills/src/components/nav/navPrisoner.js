import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
class NavPrisoner extends Component {
	render() {
		console.log('priosn.js history', this);
		return (
			<div className='ui large top fixed hidden menu'>
				<div className='ui container'>
					{/* <Link to='/'>
						<a className='item'>Home</a>
					</Link> */}
					<Link to='/inmates'>
						<a className='active item'>Inmates</a>
					</Link>
					<Link to='/prisons'>
						<a className='item'>Prisons</a>
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
		);
	}
}

export default NavPrisoner;
