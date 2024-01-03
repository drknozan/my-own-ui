import styled, { css } from 'styled-components';
import { InputProps } from './Input';

const variants = {
  default: css`
    border: 1px solid #ccc;
    &:focus {
      border-color: #999999;
    }
  `,
  success: css`
    border: 1px solid #00a859;
    &:focus {
      border-color: #00a859;
    }
  `,
  error: css`
    border: 1px solid #ff0000;
    &:focus {
      border-color: #ff0000;
    }
  `,
};

const labelColors = {
  default: '#000000',
  success: '#00a859',
  error: '#ff0000',
};

export const Input = styled.input<InputProps>`
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  ${({ variant }) => (variant ? variants[variant] : variants['default'])};

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label<InputProps>`
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
  color: ${({ variant }) =>
    variant ? labelColors[variant] : labelColors['default']};
`;
