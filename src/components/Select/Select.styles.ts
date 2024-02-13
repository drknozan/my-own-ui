import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 120px;
  height: 1em;
  line-height: 1em;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Value = styled.span``;

export const DownIcon = styled.i`
  height: 6px;
  width: 6px;
  border-style: solid;
  border-width: 0 0 1px 1px;
  transform: rotate(-45deg);
`;

export const Options = styled.ul`
  position: absolute;
  max-height: 10em;
  overflow-y: auto;
  top: calc(100% + 0.3em);
  left: 0px;
  background-color: white;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 4px;
  box-sizing: border-box;
  transition: opacity 0.2s linear;
  z-index: 10;
`;

export const Option = styled.li`
  padding: 4px 6px;
  border-radius: 3px;
  padding: 6px;
  &:hover {
    background-color: #f5f5f5;
  }
`;
