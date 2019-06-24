import { combineReducers } from 'redux';
import PrisonersData from './Prisoner';
import PrisonData from './Prison';
export default combineReducers({
	prisoners : PrisonersData,
	prison    : PrisonData,
});
