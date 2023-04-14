import React from 'react';
import { FormContainerInterface } from './FormContainerInterface';
import { Box } from '@mui/material';

const FormContainer = ({ children, onSubmit, sx }: FormContainerInterface) => {
  return (
    <Box sx={{ ...sx, maxWidth: '600px', textAlign: 'center' }}>
      <form onSubmit={onSubmit}>{children}</form>
    </Box>
  );
};

export default FormContainer;
