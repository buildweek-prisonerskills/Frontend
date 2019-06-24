import {
  GET_INMATE_START,
  GET_INMATE_ERROR,
  GET_INMATE_SUCCESS
} from "../actions";

const initialState = {
  prisoners: [],
  fetchingPrisoners: false,
  addingPrisoners: false,
  updatingPrisoner: false,
  deletingPrisoner: false,
  error: null
};

const PrisonersData = (state = initialState, action) => {
  switch (action.type) {
    case GET_INMATE_START:
      return {
        ...state,

        fetchingPrisoners: true,
        error: ""
      };
    case GET_INMATE_SUCCESS: {
      return {
        ...state,
        prisoners: action.payload,
        fetchingPrisoners: false,
        error: ""
      };
    }
    case GET_INMATE_ERROR: {
      return {
        ...state,
        fetchingPrisoners: false,
        error: ""
      };
    }
    default:
      return state;
  }
};

export default PrisonersData;
