//the base of the api
import {PrisonApiBase} from '../components/utils/api'


//get data
export  const  GET_INMATE_START = "GET_INMATE_START";
export const GET_INMATE_SUCCESS = " GET_INMATE_SUCCESS";
export const GET_INMATE_ERROR = "GET_INMATE_ERROR";
export const GET_Inmate = () =>dispatch=> {
dispatch({type:GET_INMATE_START})
PrisonApiBase().get('/posts').then(res => dispatch({type:GET_INMATE_SUCCESS,payload:res.data})).catch(err => dispatch({type:GET_INMATE_ERROR,payload:err.data}))
}


//add
export  const  ADD_INMATE_START = "ADD_INMATE_START";
export const ADD_INMATE_SUCCESS = " ADD_INMATE_SUCCESS";
export const ADD_INMATE_ERROR = "ADD_INMATE_ERROR";
export const Add_Inmate = inmate =>dispatch=> {
dispatch({type:ADD_INMATE_START})
PrisonApiBase().post('/posts',inmate).then(res => dispatch({type:ADD_INMATE_SUCCESS,payload:res.data})).catch(err => dispatch({type:ADD_INMATE_ERROR,payload:err.data}))
}

//delete
export const  DELETE_INMATE_START = "DELETE_INMATE_START";
export const DELETE_INMATE_SUCCESS = " DELETE_INMATE_SUCCESS";
export const DELETE_INMATE_ERROR = "DELETE_INMATE_ERROR";
export const Delete_Inmate = id => dispatch =>{
    dispatch({type:DELETE_INMATE_START})
   PrisonApiBase().post(`/posts${id}`).then(res=> dispatch({type:DELETE_INMATE_SUCCESS,payload:res.data})).catch(err => dispatch({type:DELETE_INMATE_ERROR,payload:err.data}))
}

//update
export const UPDATE_INMATE_START = "UPDATE_INMATE_START";
export const UPDATE_INMATE_SUCCESS = "UPDATE_INMATE_SUCCESS";
export const UPDATE_INMATE_ERROR = "UPDATE_INMATE_ERROR";