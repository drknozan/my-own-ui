import React, { useState, useRef, useEffect, ReactNode } from 'react';
import * as Styled from './Accordion.styles';

export interface AccordionProps {
  title?: string;
  content?: ReactNode;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && elementRef.current) {
      const scrollHeight: number = elementRef.current.scrollHeight;
      setHeight(scrollHeight);
    } else if (!open && elementRef.current) {
      setHeight(0);
    }
  }, [open]);

  return (
    <Styled.Accordion>
      <Styled.AccordionTitle onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {title}
        <Styled.Icon>{open ? '-' : '+'}</Styled.Icon>
      </Styled.AccordionTitle>
      <Styled.AccordionContent open={open} ref={elementRef} style={{ height }}>
        {content}
      </Styled.AccordionContent>
    </Styled.Accordion>
  );
};

export default Accordion;
