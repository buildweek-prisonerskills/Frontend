//the base of the api
import { PrisonApiBase } from '../components/utils/api';

//get
export const GET_PRISON_START = 'GET_PRISON_START';
export const GET_PRISON_SUCCESS = ' GET_PRISON_SUCCESS';
export const GET_PRISON_ERROR = 'GET_PRISON_ERROR';
export const GET_Prison = () => dispatch => {
	dispatch({ type: GET_PRISON_START });
	PrisonApiBase()
		.get('/posts')
		.then(res => dispatch({ type: GET_PRISON_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: GET_PRISON_ERROR, payload: err.data }));
};

//add
export const ADD_PRISON_START = 'ADD_PRISON_START';
export const ADD_PRISON_SUCCESS = ' ADD_PRISON_SUCCESS';
export const ADD_PRISON_ERROR = 'ADD_PRISON_ERROR';
export const Add_Prison = prison => dispatch => {
	dispatch({ type: ADD_PRISON_START });
	PrisonApiBase()
		.post('/posts', prison)
		.then(res => dispatch({ type: ADD_PRISON_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: ADD_PRISON_ERROR, payload: err.data }));
};

//delete
export const DELETE_PRISON_START = 'DELETE_PRISON_START';
export const DELETE_PRISON_SUCCESS = ' DELETE_PRISON_SUCCESS';
export const DELETE_PRISON_ERROR = 'DELETE_PRISON_ERROR';
export const Delete_Prison = id => dispatch => {
	dispatch({ type: DELETE_PRISON_START });
	PrisonApiBase()
		.post(`/posts${id}`)
		.then(res => dispatch({ type: DELETE_PRISON_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: DELETE_PRISON_ERROR, payload: err.data }));
};

//update
export const UPDATE_PRISON_START = 'UPDATE_PRISON_START';
export const UPDATE_PRISON_SUCCESS = 'UPDATE_PRISON_SUCCESS';
export const UPDATE_PRISON_ERROR = 'UPDATE_PRISON_ERROR';
