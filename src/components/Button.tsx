import React, { ReactNode } from 'react';
import * as Styled from './Button.styles';

export interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlined'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

const Button = ({
  onClick,
  variant = 'primary',
  size = 'small',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} variant={variant} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
