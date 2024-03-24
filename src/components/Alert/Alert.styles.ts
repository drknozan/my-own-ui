import styled, { css } from 'styled-components';

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

export const Container = styled.div<{
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}>`
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  color: #fff;
  border-radius: 4px;
  background-color: #fff;
  ${(props) =>
    props.$variant ? variants[props.$variant] : variants['primary']}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Description = styled.div`
  margin-top: 4px;
`;

export const CloseButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}>`
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #fff;
  color: #fff;
  ${(props) =>
    props.$variant ? variants[props.$variant] : variants['primary']};
`;
