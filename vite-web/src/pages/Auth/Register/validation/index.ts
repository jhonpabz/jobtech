import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('First Name is required'),
  lastName: yup.string().required('First Name is required'),
  location: yup.string().required('Location is required'),
  email: yup
    .string()
    .required('Email is required.')
    .email('Must be a valid email'),
  password: yup.string().required('Password is required.'),
});
