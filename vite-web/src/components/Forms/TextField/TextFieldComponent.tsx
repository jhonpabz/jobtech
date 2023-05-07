import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TextFieldInterface } from './TextFieldInterface';

export const TextFieldComponent: React.FC<TextFieldInterface> = ({
  control,
  name,
  label,
  errors,
  type,
  style,
  variant = 'outlined',
  required = false,
  disabled = false,
  autoFocus = false,
  sx,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, value } }) => (
        <TextField
          name={name}
          value={value || ''}
          variant={variant}
          label={label}
          onChange={onChange}
          disabled={disabled}
          autoFocus={autoFocus}
          error={errors[name]?.message ? true : false}
          helperText={errors[name]?.message}
          fullWidth
          type={type}
          style={style}
          sx={{ ...sx, my: 1 }}
        />
      )}
    />
  );
};
