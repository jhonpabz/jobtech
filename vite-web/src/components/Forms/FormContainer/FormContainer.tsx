import React from 'react';
import { FormContainerInterface } from './FormContainerInterface';

const FormContainer = ({ children, onSubmit }: FormContainerInterface) => {
  return (
    <>
      <form onSubmit={onSubmit}>{children}</form>
    </>
  );
};

export default FormContainer;
