import { FC } from 'react';
import { IButtonProps } from '../../../types/ButtonsTypes';
import { ButtonWrapper } from './ButtonStyled';

const Button: FC<IButtonProps> = ({
  children,
  size,
  disabled,
  variant = 'text',
  onClickHandler,
}) => {
  return (
    <ButtonWrapper variant={variant} size={size} disabled={disabled} onClick={onClickHandler}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
