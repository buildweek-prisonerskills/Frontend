import axios from 'axios'

export const PrisonApiBase = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      headers: {
        Authorization: token
      },
 baseURL: 'https://jsonplaceholder.typicode.com/'
    });
  };
  




