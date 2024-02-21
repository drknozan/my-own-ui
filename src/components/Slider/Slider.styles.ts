import styled from 'styled-components';

export const Slider = styled.input<{ disabled: boolean }>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background: #dcdcdc;
  outline: none;
  ${(props) =>
    props.disabled && 'opacity: 0.5; background: #dcdcdc; cursor: not-allowed;'}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #000;
    border-radius: 50%;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  .slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
  }
`;
