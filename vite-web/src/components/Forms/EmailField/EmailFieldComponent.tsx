import React from 'react';
import { TextField } from '@mui/material';
import { Controller, FieldError } from 'react-hook-form';
import { EmailFieldInterface } from './EmailFieldInterface';

const EmailFieldComponent: React.FC<EmailFieldInterface> = ({
  control,
  name,
  required,
  label,
  disabled = false,
  autoFocus,
  type,
  variant = 'outlined',
  sx,
}) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const validateEmail = (error: FieldError | undefined, value: string) => {
    if (!error && !isValidEmail(value) && value) {
      return (error = {
        message: 'Must be valid a email',
        type: 'required',
        ref: { name: 'email' },
      });
    }

    if (!error && !isValidEmail(value) && value === '') {
      return (error = {
        message: 'Email is required',
        type: 'required',
        ref: { name: 'email' },
      });
    }
    return error;
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          error = validateEmail(error, value);

          return (
            <TextField
              variant={variant}
              label={label || 'Email'}
              onChange={onChange}
              disabled={disabled}
              autoFocus={autoFocus}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              type={type || 'email'}
              sx={{ my: 1, ...sx }}
            />
          );
        }}
      />
    </>
  );
};

export default EmailFieldComponent;
