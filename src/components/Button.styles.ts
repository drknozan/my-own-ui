import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const variants = {
  primary: css`
    background-color: #007bff;
    color: #fff;
  `,
  secondary: css`
    background-color: #6c757d;
    color: #fff;
  `,
  outlined: css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 9px 19px;
  `,
  success: css`
    background-color: #00a854;
    color: #fff;
  `,
  warning: css`
    background-color: #ffd700;
    color: #fff;
  `,
  error: css`
    background-color: #ff3860;
    color: #fff;
  `,
};

const sizes = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 12px 24px;
  `,
  large: css`
    font-size: 16px;
    padding: 16px 32px;
  `,
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  ${({ variant }) => variant && variants[variant || 'primary']}
  ${({ size }) => size && sizes[size || 'small']}
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.97);
  }
`;
