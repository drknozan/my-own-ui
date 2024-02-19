import React, { useState } from 'react';
import * as Styled from './Checkbox.styles';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <Styled.Container>
      <Styled.Input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <Styled.Checkmark checked={isChecked} disabled={disabled} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

export default Checkbox;
