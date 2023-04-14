'use client';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Paper, Typography, Button } from '@mui/material';
import FormContainer from '../components/Forms/FormContainer/FormContainer';
import TextFieldComponent from '../components/Forms/TextField/TextFieldComponent';
import EmailFieldComponent from '../components/Forms/EmailField/EmailFieldComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import axiosClient from '@/app/api/axiosClient';

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

const queryClient = new QueryClient();

const Register = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({ reValidateMode: 'onSubmit' });

  const useRegisterFormMutation = useMutation({
    mutationFn: (formData) => {
      return axiosClient.post('/auth/register', formData);
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    useRegisterFormMutation.mutate(data);
    console.log(
      'useRegisterFormMutation.isSuccess: ',
      useRegisterFormMutation.isSuccess
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
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
                Register
              </Typography>
            </Box>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ minHeight: '60vh', p: 5 }}>
                <TextFieldComponent
                  autoFocus={true}
                  control={control}
                  disabled={false}
                  errors={errors}
                  label="Name"
                  name="name"
                  required={true}
                />
                <EmailFieldComponent
                  autoFocus={false}
                  control={control}
                  disabled={false}
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
                />
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </FormContainer>
          </Paper>
        </Box>
      </Fragment>
    </QueryClientProvider>
  );
};
export default Register;
