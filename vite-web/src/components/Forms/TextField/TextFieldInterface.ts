import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

export interface TextFieldInterface {
  control: Control | any;
  name: string;
  label: string;
  errors: any;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  style?: React.CSSProperties | any;
  required?: boolean;
  sx?: any;
}
