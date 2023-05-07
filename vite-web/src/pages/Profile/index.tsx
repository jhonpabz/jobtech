import { ReactElement, Fragment } from 'react';

import { CardComponent, PageWrapper } from '@components/index';
import { FormContainer, TextFieldComponent } from '@components/Forms';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Profile = (): ReactElement => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      location: '',
      email: '',
    },
  });

  type FormData = {
    name?: string;
    lastName?: string;
    location?: string;
    email: string;
  };

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <Fragment>
      <PageWrapper>
        <CardComponent>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ minHeight: '60vh', p: 1 }}>
              <TextFieldComponent
                autoFocus={true}
                control={control}
                disabled={false}
                errors={errors}
                label="First Name"
                name="name"
                required={true}
              />
              <TextFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                errors={errors}
                label="Last Name"
                name="lastName"
                required={true}
              />
              <TextFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                errors={errors}
                label="Location"
                name="location"
                required={true}
              />
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

              <LoadingButton
                sx={{ mt: 2, p: 2 }}
                variant="contained"
                type="submit"
                fullWidth
                // loading={isLoading}
                // disabled={isLoading}
              >
                Submit
              </LoadingButton>
            </Box>
          </FormContainer>
        </CardComponent>
      </PageWrapper>
    </Fragment>
  );
};
export default Profile;
