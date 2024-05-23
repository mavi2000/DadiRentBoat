import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://localhost:3800', // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseURL;



// baseURL: ''