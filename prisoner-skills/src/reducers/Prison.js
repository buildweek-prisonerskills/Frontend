import {	
	GET_PRISON_START,	
	GET_PRISON_ERROR,	
	GET_PRISON_SUCCESS,	
	ADD_PRISON_START,	
	ADD_PRISON_ERROR,	
	ADD_PRISON_SUCCESS,	
	DELETE_PRISON_ERROR,	
	DELETE_PRISON_START,	
	DELETE_PRISON_SUCCESS,	
	UPDATE_PRISON_ERROR,	
	UPDATE_PRISON_SUCCESS,	
	UPDATE_PRISON_START,	
} from '../actions';	

 const initialState = {	
	prisons         : [],	
	fetchingPrisons : false,	
	addingPrisons   : false,	
	updatingPrison  : false,	
	deletingPrison  : false,	
	error           : null,	
};	

 const PrisonsData = (state = initialState, action) => {	
	switch (action.type) {	
		case GET_PRISON_START:	
			return {	
				...state,	

 				fetchingPrisons : true,	
				error           : '',	
			};	
		case GET_PRISON_SUCCESS: {	
			return {	
				...state,	
				prisons         : action.payload,	
				fetchingPrisons : false,	
				error           : '',	
			};	
		}	
		case GET_PRISON_ERROR: {	
			return {	
				...state,	
				fetchingPrisons : false,	
				error           : '',	
			};	
		}	
		case ADD_PRISON_START:	
			return {	
				...state,	
				addingPrisons : true,	
				error         : '',	
			};	
		case ADD_PRISON_SUCCESS:	
			return {	
				...state,	
				addingPrisons : false,	
				prisons       : [ ...state.prisons, action.payload ],	
			};	
		case ADD_PRISON_ERROR:	
			return {	
				...state,	
				addingPrisons : false,	
				error         : action.payload,	
			};	
		//add  end	

 		// delete  start	
		case DELETE_PRISON_START:	
			console.log('this one is from the reducer', action);	
			return {	
				...state,	
				deletingPrisons : true,	
				error           : '',	
			};	
		case DELETE_PRISON_SUCCESS:	
			console.log('here', action.payload);	
			return {	
				...state,	
				prisons         : state.prisons.filter(prison => prison.id !== action.payload),	
				deletingPrisons : false,	
			};	
		case DELETE_PRISON_ERROR:	
			return { deletingPrisons: false, error: action.payload };	
		//UPDATEING	
		case UPDATE_PRISON_START:	
			console.log('this one is from the reducer', action);	
			return {	
				...state,	
				updatingPrisons : true,	
				error           : '',	
			};	
		case UPDATE_PRISON_SUCCESS:	
			console.log('here', action.payload);
			const newPrisons = state.prisons.filter(inmate => inmate.id !== action.payload.id);	
			return {	
				...state,	
				prisons         : [...newPrisons,action.payload],	
				updatingPrisons : false,	
			};	
		case UPDATE_PRISON_ERROR:	
			return { updatingPrisons: false, error: action.payload };	

 		default:	
			return state;	
	}	
};	

 export default PrisonsData;	

