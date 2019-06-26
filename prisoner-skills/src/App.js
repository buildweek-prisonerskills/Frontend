import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners'
//import AddPrisoner from './forms/prisoner/AddPrisoner'
import EditPrisoner from './forms/prisoner/EditPrisoner'
import {Route,Link} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
function App() {


	
	return (
		<div className='App'>
		<Route exact path='/inmates' component={Prisoners}/>
	
		<Route
            
            path='/inmates/:id'
            render={props => <EditPrisoner {...props} />}
          />



<div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Prisoners} />
      </div>
		
		</div>
	);
}

export default App;
