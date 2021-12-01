import {ChangeEvent} from 'react';

export interface IInputTextProps {
  label?: string;
  error?: boolean;
  placeholder?: string;
  disabled?: boolean;
  value: number | string;
  type?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}