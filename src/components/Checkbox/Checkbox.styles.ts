import styled from 'styled-components';

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Checkmark = styled.span<{
  checked: boolean;
  disabled: boolean;
}>`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-right: 10px;
  background-color: ${(props) => (props.checked ? '#000' : 'transparent')};
  background-color: ${(props) => props.disabled && '#dcdcdc'};

  &::after {
    font-size: 14px;
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};
    content: '';
    left: 6px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const Label = styled.span``;
