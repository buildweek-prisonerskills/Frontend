import React from 'react';
import './App.scss';
import Prisoners from './components/Prisoners'
import AddPrisoner from './forms/prisoner/AddPrisoner'
function App() {
	return (
		<div className='App'>
		<Prisoners/>
		<AddPrisoner/>
		</div>
	);
}

export default App;
