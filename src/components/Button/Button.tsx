import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlined'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ variant, size, children, ...rest }: ButtonProps) => {
  return (
    <Styled.Button variant={variant} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
