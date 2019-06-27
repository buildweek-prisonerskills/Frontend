import {
	GET_INMATE_START,
	GET_INMATE_ERROR,
	GET_INMATE_SUCCESS,
	ADD_INMATE_START,
	ADD_INMATE_ERROR,
	ADD_INMATE_SUCCESS,
	DELETE_INMATE_ERROR,
	DELETE_INMATE_START,
	DELETE_INMATE_SUCCESS,
	UPDATE_INMATE_ERROR,
	UPDATE_INMATE_SUCCESS,
	UPDATE_INMATE_START,
} from '../actions';

const initialState = {
	prisoners         : [],
	fetchingPrisoners : false,
	addingPrisoners   : false,
	updatingPrisoner  : false,
	deletingPrisoner  : false,
	error             : null,
};

const PrisonersData = (state = initialState, action) => {
	switch (action.type) {
		case GET_INMATE_START:
			return {
				...state,

				fetchingPrisoners : true,
				error             : '',
			};
		case GET_INMATE_SUCCESS: {
			return {
				...state,
				prisoners         : action.payload,
				fetchingPrisoners : false,
				error             : '',
			};
		}
		case GET_INMATE_ERROR: {
			return {
				...state,
				fetchingPrisoners : false,
				error             : '',
			};
		}
		case ADD_INMATE_START:
			return {
				...state,
				addingPrisoners : true,
				error           : '',
			};
		case ADD_INMATE_SUCCESS:
			return {
				...state,
				addingPrisoners : false,
				prisoners       : [ ...state.prisoners, action.payload ],
			};
		case ADD_INMATE_ERROR:
			return {
				...state,
				addingPrisoners : false,
				error           : action.payload,
			};
		//add  end

		// delete  start
		case DELETE_INMATE_START:
			console.log('this one is from the reducer', action);
			return {
				...state,
				deletingPrisoners : true,
				error             : '',
			};
		case DELETE_INMATE_SUCCESS:
			console.log('here', action.payload);
			return {
				...state,
				prisoners         : state.prisoners.filter(inmate => inmate.id !== action.payload),
				deletingPrisoners : false,
			};
		case DELETE_INMATE_ERROR:
			return { deletingPrisoners: false, error: action.payload };
		//UPDATEING
		case UPDATE_INMATE_START:
			return {
				...state,
				updatingPrisoners : true,
				error             : '',
			};
		case UPDATE_INMATE_SUCCESS:
			const newPrisoners = state.prisoners.filter(inmate => inmate.id !== action.payload.id);

			console.log('here', action.payload);
			return {
				...state,
				prisoners         : [ ...newPrisoners, action.payload ],
				updatingPrisoners : false,
			};
		case UPDATE_INMATE_ERROR:
			return { updatingPrisoners: false, error: action.payload };

		default:
			return state;
	}
};

export default PrisonersData;
