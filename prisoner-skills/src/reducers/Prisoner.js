import {
  GET_INMATE_START,
  GET_INMATE_ERROR,
  GET_INMATE_SUCCESS,
  ADD_INMATE_START,
  ADD_INMATE_ERROR,
  ADD_INMATE_SUCCESS,
  DELETE_INMATE_ERROR,
  DELETE_INMATE_START,
  DELETE_INMATE_SUCCESS
} from "../actions";

const initialState = {
  inmates: [],
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
        inmates: action.payload,
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
    case ADD_INMATE_START:
      return {
        ...state,
        addingPrisoners: true,
        error: ""
      };
    case ADD_INMATE_SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        addingPrisoners: false,
        inmates: [...state.prisoners.inmates]
      };
    case ADD_INMATE_ERROR:
      return {
        ...state,
        addingPrisoners: false,
        error: action.payload
      };
    //add  end

    // delete  start
    case DELETE_INMATE_START:
      return {
        ...state,
        deletingPrisoners: true,
        error: ""
      };
    case DELETE_INMATE_SUCCESS:
      return {
        ...state,
             inmates: state.inmates.filter(
             prisoner =>  prisoner.id !== action.payload)
         ,
        deletingPrisoners: false
      };
    case DELETE_INMATE_ERROR:
      console.log(state)
      return { deletingPrisoners: false, error: action.payload };

    default:
      return state;
  }
};

export default PrisonersData;
