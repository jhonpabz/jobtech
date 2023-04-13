import axios from 'axios';

const baseUrl =
  (process.env.NEXT_APP_API_URL
    ? process.env.NEXT_APP_API_URL
    : 'http://localhost:5000') + '/api/v1';

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default axiosClient;
