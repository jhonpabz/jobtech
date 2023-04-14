import { useMutation } from '@tanstack/react-query';
import axiosClient from '@/app/api/axiosClient';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useRegisterFormMutation = useMutation((formData) => {
  axiosClient.post('/auth/register', formData);
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useRegisterFormMutation = useMutation({
  mutationFn: (formData) => {
    return axiosClient.post('/auth/register', formData);
  },
});
