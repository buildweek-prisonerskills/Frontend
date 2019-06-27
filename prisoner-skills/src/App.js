import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners';
import EditPrisoner from './forms/prisoner/EditPrisoner';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './views/general/Homepage';
//import PrivateRoute from './components/PrivateRoute'
import Prisons from './components/Prisons';
function App() {
	return (
		<div className='App'>
			{/* <Route exact path='/' component={HomePage} /> */}
			<Route exact path='/inmates' component={Prisoners} />
			<Route exact path='/prisons' component={Prisons} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signUp' component={SignUp} />

			{/*<PrivateRoute exact path="/inmates" component={Prisoners} />*/}

			<Route path='/inmates/:id' render={props => <EditPrisoner {...props} />} />
		</div>
	);
}

export default App;
