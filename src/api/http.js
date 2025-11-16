import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.example.com',
  withCredentials: true,
  timeout: 8000,
});

export default http;
