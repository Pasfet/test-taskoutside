import { FC } from 'react';
import { ICheckBoxProps } from '../../../types/CheckboxTypes';
import { CheckboxLabel, CheckboxText, HiddenCheckbox } from './CheckboxStyled';

const Checkbox: FC<ICheckBoxProps> = ({ children, disabled, onChangeHandler }) => {
  return (
    <CheckboxLabel>
      <HiddenCheckbox
        type="checkbox"
        disabled={disabled}
        onChange={(e: any) => onChangeHandler(e, children)}
      ></HiddenCheckbox>
      <CheckboxText>{children}</CheckboxText>
    </CheckboxLabel>
  );
};

export default Checkbox;
