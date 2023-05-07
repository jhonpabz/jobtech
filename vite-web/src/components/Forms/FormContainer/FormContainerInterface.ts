import { FormEventHandler } from 'react';

export interface FormContainerInterface {
  children: JSX.Element[] | JSX.Element;
  onSubmit: FormEventHandler<HTMLFormElement>;
  sx?: React.CSSProperties;
}
