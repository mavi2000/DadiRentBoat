import axios from 'axios';

const axiosBaseUrl = axios.create({
  baseURL: 'http://localhost:3800/',
});

export default axiosBaseUrl;
