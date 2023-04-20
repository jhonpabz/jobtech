import axios from 'axios';

export const loginForm = (formData: any) => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;

  return axios.post(baseUrl + '/auth/login', formData);
};
