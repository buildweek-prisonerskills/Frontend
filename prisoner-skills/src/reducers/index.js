import { combineReducers } from 'redux';
import PrisonersData from './Prisoner';
import PrisonData from './Prison';
import Login from './Login'
export default combineReducers({
	prisoners : PrisonersData,
	prison    : PrisonData,
	login:Login
});
