import { FC } from 'react';
import { IInputTextProps } from '../../../types/InputTextTypes';
import { InputError, InputLabel, InputTextField } from './InputTextStyled';

const InputText: FC<IInputTextProps> = ({
  label,
  placeholder,
  error,
  disabled,
  value,
  onChangeHandler,
}) => {
  return (
    <InputLabel>
      {label}
      <InputTextField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        error={error}
      />
      {error && <InputError>Это поле обязательно для заполнения</InputError>}
    </InputLabel>
  );
};

export default InputText;
