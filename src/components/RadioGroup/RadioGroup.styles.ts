import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid black;
  transition: 0.2s all linear;
  margin: 0;
  cursor: pointer;
  &:checked {
    border: 6px solid black;
  }
  &:disabled {
    background-color: #dcdcdc;
    border: none;
  }
`;

export const Label = styled.label`
  margin-left: 6px;
`;
