'use client';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from '../components/Forms/FormContainer/FormContainer';
import TextFieldComponent from '../components/Forms/TextField/TextFieldComponent';

const Register = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <Fragment>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextFieldComponent
          autoFocus={true}
          control={control}
          disabled={false}
          errors={errors}
          label="Full Name"
          name="fullName"
          required={true}
        />
      </FormContainer>
    </Fragment>
  );
};
export default Register;
