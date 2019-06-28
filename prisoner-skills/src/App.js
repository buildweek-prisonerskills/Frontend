import React from 'react';
import './App.scss';
import PrisonHome from './views/general/PrisonsHome'
import InmatesHome from './views/general/inmatesHome'
import { Route,Link,NavLink} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './views/general/Homepage';
//import PrivateRoute from './components/PrivateRoute'
import MainAdmin from './components/MainAdmin/MainAdmin'

function App() {
	return (
		<div className='App'>
	


             

				 <Route exact path="/" component={HomePage}/>
				 <Route exact path="/inmateHome" component={InmatesHome}/>

				 
				 <Route exact path="/prisionDefault" component={PrisonHome}/>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signUp' component={SignUp} />

<Route path="/MainAdmin" component={MainAdmin} />
			{/**/}
                
		
		</div>
	);
}

export default App;
