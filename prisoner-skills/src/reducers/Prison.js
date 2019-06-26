import { GET_PRISON_START, GET_PRISON_ERROR, GET_PRISON_SUCCESS } from '../actions';

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
			console.log('here', action.payload)
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
		default:
			return state;
	}
};

export default PrisonsData;
