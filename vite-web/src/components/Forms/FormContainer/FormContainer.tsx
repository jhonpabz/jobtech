import React from 'react';
import { FormContainerInterface } from './FormContainerInterface';
import { Box } from '@mui/material';

export const FormContainer = ({
  children,
  onSubmit,
  sx,
}: FormContainerInterface) => {
  return (
    <Box sx={{ ...sx, textAlign: 'center' }}>
      <form onSubmit={onSubmit}>{children}</form>
    </Box>
  );
};
