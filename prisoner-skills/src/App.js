import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners'
import AddPrisoner from './forms/prisoner/AddPrisoner'
import UpdateInmates from './forms/prisoner/EditPrisoner'
import {Route} from 'react-router-dom'
function App() {
	return (
		<div className='App'>
		<Prisoners/>
		<Route
            exact
            path={`/inmates/:id`}
            render={props => <UpdateInmates {...props} />}
          />
		<AddPrisoner/>
		</div>
	);
}

export default App;
