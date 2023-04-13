'use client';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Paper, Typography, Button } from '@mui/material';
import FormContainer from '../components/Forms/FormContainer/FormContainer';
import TextFieldComponent from '../components/Forms/TextField/TextFieldComponent';
import EmailFieldComponent from '../components/Forms/EmailField/EmailFieldComponent';

const Login = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
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
              Login
            </Typography>
          </Box>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ minHeight: '60vh', p: 5 }}>
              <EmailFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                name="email"
                required={true}
                type="email"
              />
              <TextFieldComponent
                autoFocus={true}
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
                Login
              </Button>
            </Box>
          </FormContainer>
        </Paper>
      </Box>
    </Fragment>
  );
};
export default Login;
