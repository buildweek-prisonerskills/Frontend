import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners'
import AddPrisoner from './forms/prisoner/AddPrisoner'
import Prisons from './components/Prisons'
function App() {
	return (
		<div className='App'>
		<Prisoners/>
		<AddPrisoner/>
		<Prisons/>
		</div>
	);
}

export default App;
