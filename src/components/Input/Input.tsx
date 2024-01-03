import React, { Fragment, InputHTMLAttributes } from 'react';
import * as Styled from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'success' | 'error';
  label?: string;
}

const Input = ({ variant, label, ...rest }: InputProps) => {
  return (
    <Fragment>
      {label && <Styled.Label variant={variant}>{label}</Styled.Label>}
      <Styled.Input variant={variant} {...rest} />
    </Fragment>
  );
};

export default Input;
