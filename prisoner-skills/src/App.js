import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners'
//import AddPrisoner from './forms/prisoner/AddPrisoner'
import EditPrisoner from './forms/prisoner/EditPrisoner'
import {Route} from 'react-router-dom'
function App() {


	
	return (
		<div className='App'>
		<Route exact path='/inmates' component={Prisoners}/>
	
		<Route
            
            path='/inmates/:id'
            render={props => <EditPrisoner {...props} />}
          />
		
		</div>
	);
}

export default App;
