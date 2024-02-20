import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  z-index: 99;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
`;

export const Date = styled.span``;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0 12px 0;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Day = styled.div<{ $selected: boolean }>`
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  ${(props) =>
    !props.$selected &&
    `  &:hover {
    background-color: #f5f5f5;
  }`}
  ${(props) => props.$selected && `background-color: #000; color: #fff`};
  transition: all 0.1s linear;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const PrevButton = styled.div`
  height: 6px;
  width: 6px;
  border-style: solid;
  border-width: 0 0 1px 1px;
  border-color: #ccc;
  transform: rotate(45deg);
  position: absolute;
  top: 8px;
  left: 10px;
`;

export const PrevButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    border-color: #000;
  }

  &:hover ${PrevButton} {
    border-color: #000;
  }
`;

export const NextButton = styled.div`
  height: 6px;
  width: 6px;
  border-style: solid;
  border-width: 0 0 1px 1px;
  border-color: #ccc;
  transform: rotate(-135deg);
  position: absolute;
  top: 8px;
  right: 10px;
  transition: all 0.1s linear;
`;

export const NextButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: #000;
  }

  &:hover ${NextButton} {
    border-color: #000;
  }
`;
