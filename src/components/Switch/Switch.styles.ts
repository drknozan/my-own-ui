import styled, { css } from 'styled-components';

const sizes = {
  small: 1,
  medium: 1.25,
  large: 1.5,
};

const variants = {
  primary: css`
    background-color: #007bff;
  `,
  secondary: css`
    background-color: #6c757d;
  `,
  success: css`
    background-color: #00a854;
  `,
  warning: css`
    background-color: #ffd700;
  `,
  error: css`
    background-color: #ff3860;
  `,
};

export const SwitchContainer = styled.label<{
  size?: 'small' | 'medium' | 'large';
}>`
  position: relative;
  display: inline-block;
  width: ${(props) => 40 * sizes[props.size || 'small']}px;
  height: ${(props) => 24 * sizes[props.size || 'small']}px;
`;

export const SwitchSlider = styled.span<{
  size?: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dcdcdc;
  border-radius: ${(props) => 24 * sizes[props.size || 'small']}px;
  transition: all 0.3s;
  cursor: pointer;

  &:before {
    position: absolute;
    width: ${(props) => 16 * sizes[props.size || 'small']}px;
    height: ${(props) => 16 * sizes[props.size || 'small']}px;
    left: ${(props) => 4 * sizes[props.size || 'small']}px;
    bottom: ${(props) => 4 * sizes[props.size || 'small']}px;
    content: '';
    transition: 0.3s;
    background-color: white;
    border-radius: ${(props) => 10 * sizes[props.size || 'small']}px;
  }
`;

export const SwitchInput = styled.input<{
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}>`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${SwitchSlider} {
    ${(props) => variants[props.$variant || 'primary']};
  }

  &:checked + ${SwitchSlider}:before {
    transform: translateX(100%);
  }

  &:disabled + ${SwitchSlider} {
    cursor: not-allowed;
  }

  &:disabled + ${SwitchContainer} {
    cursor: not-allowed;
  }
`;
