import { loginForm } from '../api/loginForm';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_APP_API_URL;
export const useLoginFormMutation = useMutation({
  mutationFn: (formData: any) => {
    return axios.post(baseUrl + '/auth/login', formData);
  },
});
