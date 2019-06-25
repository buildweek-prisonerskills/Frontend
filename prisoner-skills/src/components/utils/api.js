import axios from 'axios'

export const PrisonApiBase = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      headers: {
        Authorization: token
      },
 baseURL: 'http://prisonerskills.herokuapp.com/'
    });
  };
  




