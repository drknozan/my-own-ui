import React from 'react';
import * as Styled from './RadioGroup.styles';

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedOption?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioGroup = ({ options, name, onChange, disabled }: RadioGroupProps) => {
  return (
    <>
      {options.map((option) => (
        <Styled.Container key={option.value}>
          <Styled.Input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled}
          ></Styled.Input>
          <Styled.Label htmlFor={option.value}>{option.label}</Styled.Label>
        </Styled.Container>
      ))}
    </>
  );
};

export default RadioGroup;
