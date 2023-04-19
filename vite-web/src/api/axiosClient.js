import axios from 'axios';

const baseUrl =
  (import.meta.env.VITE_APP_API_URL
    ? import.meta.env.VITE_APP_API_URL
    : 'http://localhost:5000') + '/api/v1';

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default axiosClient;
