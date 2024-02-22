import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    border: 1px solid #007bff;
    color: #007bff;
  `,
  secondary: css`
    border: 1px solid #6c757d;
    color: #6c757d;
  `,
  success: css`
    border: 1px solid #00a854;
    color: #00a854;
  `,
  warning: css`
    border: 1px solid #ffd700;
    color: #ffd700;
  `,
  error: css`
    border: 1px solid #ff3860;
    color: #ff3860;
  `,
};

export const Container = styled.div<{
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}>`
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 14px;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  ${(props) =>
    props.$variant ? variants[props.$variant] : variants['primary']};
`;
