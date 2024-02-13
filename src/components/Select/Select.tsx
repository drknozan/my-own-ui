import React, { useState } from 'react';
import * as Styled from './Select.styles';

interface SelectProps {
  onChange: (value: string) => void;
  options: string[];
}

const Progress = ({ onChange, options }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <Styled.Container
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((prevStatus) => !prevStatus)}
      tabIndex={0}
      data-testid="select-container"
    >
      <Styled.Value>{options[selected]}</Styled.Value>
      <Styled.DownIcon />
      {
        <Styled.Options
          style={{
            visibility: open ? 'visible' : 'hidden',
            opacity: open ? 1 : 0,
          }}
        >
          {options.map((option, index) => (
            <Styled.Option
              key={option}
              onClick={() => {
                if (option !== options[selected]) {
                  onChange(option);
                  setSelected(index);
                }
              }}
            >
              {option}
            </Styled.Option>
          ))}
        </Styled.Options>
      }
    </Styled.Container>
  );
};

export default Progress;
