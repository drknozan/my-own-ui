import styled from 'styled-components';

export const Accordion = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`;

export const AccordionTitle = styled.div`
  cursor: pointer;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 20px;
  background-color: #white;
`;

export const AccordionContent = styled.div<{ open: boolean }>`
  transition: height 0.3s ease;
  overflow: hidden;
  border-top: ${({ open }) => (open ? '1px solid #dcdcdc' : 'none')};
`;

export const Icon = styled.div`
  position: absolute;
  right: 12px;
  font-weight: bold;
`;
