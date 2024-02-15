import styled, { css } from 'styled-components';
import { BadgeProps } from './Badge';

const variants = {
  primary: css`
    background-color: #007bff;
    color: #fff;
  `,
  secondary: css`
    background-color: #6c757d;
    color: #fff;
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
    height: 20px;
    font-size: 12px;
  `,
  medium: css`
    height: 22px;
    font-size: 14px;
  `,
  large: css`
    height: 24px;
    font-size: 16px;
  `,
};

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const Badge = styled.div<BadgeProps>`
  position: absolute;
  top: -6px;
  right: -6px;
  border-radius: 10px;
  color: white;
  text-align: center;
  padding: 0px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.variant ? variants[props.variant] : variants['primary'])}
  ${(props) => (props.size ? sizes[props.size] : sizes['small'])}
  cursor: ${(props) => props.cursor === 'pointer' && 'pointer'}
`;
