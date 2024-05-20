import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://backend.dadirent.it/', // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseURL;