import axios from 'axios';
//get
export const GET_PRISON_START = 'GET_PRISON_START';
export const GET_PRISON_SUCCESS = ' GET_PRISON_SUCCESS';
export const GET_PRISON_ERROR = 'GET_PRISON_ERROR';
export const GET_Prison = id => dispatch => {
	dispatch({ type: GET_PRISON_START });
	return axios
		.get('https://prisonerskills.herokuapp.com/api/facilities')
		.then(res => { console.log('success',res.data)
			dispatch({ type: GET_PRISON_SUCCESS, payload: res.data });return true
		})
		.catch(err => dispatch({ type: GET_PRISON_ERROR, payload: err.data }));
};

//add
export const ADD_PRISON_START = 'ADD_PRISON_START';
export const ADD_PRISON_SUCCESS = ' ADD_PRISON_SUCCESS';
export const ADD_PRISON_ERROR = 'ADD_PRISON_ERROR';
export const Add_Prison = prison => dispatch => {
	dispatch({ type: ADD_PRISON_START });
	return axios
		.post('https://prisonerskills.herokuapp.com/api/facilities', prison)
		.then(res =>{ dispatch({ type: ADD_PRISON_SUCCESS, payload: prison });return true})
		.catch(err => dispatch({ type: ADD_PRISON_ERROR, payload: err.data }));
};

//delete
export const DELETE_PRISON_START = 'DELETE_PRISON_START';
export const DELETE_PRISON_SUCCESS = ' DELETE_PRISON_SUCCESS';
export const DELETE_PRISON_ERROR = 'DELETE_PRISON_ERROR';
export const Delete_Prison = prisonIds => dispatch => {
	dispatch({ type: DELETE_PRISON_START });
	console.log('looking for id', prisonIds);
	axios
		.delete(`https://prisonerskills.herokuapp.com/api/facilities/${prisonIds}`)
		.then(res => {
			dispatch({ type: DELETE_PRISON_SUCCESS, payload: prisonIds });
			return true;
		})
		.catch(err => dispatch({ type: DELETE_PRISON_ERROR, payload: err.data }));
};

//update
export const UPDATE_PRISON_START = 'UPDATE_PRISON_START';
export const UPDATE_PRISON_SUCCESS = 'UPDATE_PRISON_SUCCESS';
export const UPDATE_PRISON_ERROR = 'UPDATE_PRISON_ERROR';
export const Update_Prison = prison => dispatch => {
	dispatch({ type: UPDATE_PRISON_START });
	console.log('looking for id', prison);
	return axios
		.put(`https://prisonerskills.herokuapp.com/api/facilities/${prison.id}`, prison)
		.then(res =>{ dispatch({ type: UPDATE_PRISON_SUCCESS, payload: prison });return true})
		.catch(err => dispatch({ type: UPDATE_PRISON_ERROR, payload: err.data }));
};

