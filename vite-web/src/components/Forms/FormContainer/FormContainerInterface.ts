import { FormEventHandler } from 'react';

export interface FormContainerInterface {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
