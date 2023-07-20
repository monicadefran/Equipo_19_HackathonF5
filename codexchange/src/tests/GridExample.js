import axios from 'axios';

export const fetchData = () => {
    const apiUrl =
    'http://localhost:8000/coders';
  
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