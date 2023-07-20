import axios from 'axios';

export const fetchData = () => {
    const apiUrl =
      'https://hackaton-fd4b0-default-rtdb.firebaseio.com/coders.json';
  
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  };