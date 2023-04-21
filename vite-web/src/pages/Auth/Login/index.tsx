import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Paper, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FormContainer from '@components/Forms/FormContainer/FormContainer';
import TextFieldComponent from '@components/Forms/TextField/TextFieldComponent';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useTokenStore, useUserStore } from '@stores/index';
import { loginSchema } from './validation/loginSchema';

const Login = () => {
  const setToken = useTokenStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const baseUrl = import.meta.env.VITE_APP_API_URL;

  const useLoginFormMutation = useMutation({
    mutationFn: (formData: any) => {
      return axios.post(baseUrl + '/auth/login', formData);
    },
    onSuccess: () => {
      reset();
      toast.success('Login succesfully!');
    },
  });

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data: loginData,
  } = useLoginFormMutation;

  const onSubmit = (formData: any) => {
    console.log(formData);
    useLoginFormMutation.mutate(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.msg);
    }
    if (isSuccess) {
      setToken(loginData.data.token);
      setUser(loginData.data.user);
    }
  }, [loginData, error]);
  console.log('loginData: ', loginData);

  return (
    <Fragment>
      {/* {isSuccess && <h1>isSuccess</h1>} */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <Paper sx={{ minWidth: 555, mt: 10 }} elevation={1}>
          <Box sx={{ textAlign: 'center', mt: 7 }}>
            <Typography
              variant="h4"
              gutterBottom
              display="block"
              component="div"
            >
              JobTech
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Login
            </Typography>
          </Box>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ minHeight: '60vh', p: 5 }}>
              <TextFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                errors={errors}
                label="Email"
                name="email"
                required={true}
                type="email"
              />
              <TextFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                errors={errors}
                label="Password"
                name="password"
                required={true}
                type="password"
              />
              <LoadingButton
                sx={{ mt: 2, p: 2 }}
                variant="contained"
                type="submit"
                fullWidth
                loading={isLoading}
                disabled={isLoading}
              >
                Submit
              </LoadingButton>
            </Box>
          </FormContainer>
        </Paper>
      </Box>
    </Fragment>
  );
};
export default Login;
