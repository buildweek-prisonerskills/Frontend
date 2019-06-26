import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners';
import AddPrisoner from './forms/prisoner/AddPrisoner';

import EditInmates from './forms/prisoner/EditPrisoner';
import { Route } from 'react-router-dom';

import Prisons from './components/Prisons';
import AddPrison from './forms/prison/AddPrison';

import EditPrisons from './forms/prison/EditPrison';

function App() {
	return (
		<div className='App'>
			<Prisoners />
			<Route exact path={`/inmates/:id`} render={props => <EditInmates {...props} />} />
			<AddPrisoner />
			<Prisons />
			<Route exact path={`/prisons/:id`} render={props => <EditPrisons {...props} />} />
			<AddPrison />
		</div>
	);
}

export default App;
