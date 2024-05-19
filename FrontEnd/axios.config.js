import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://127.0.0.1:3800/',
});

export default baseURL;
