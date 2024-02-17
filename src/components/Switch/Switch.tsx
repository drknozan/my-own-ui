import React, { useState } from 'react';
import * as Styled from './Switch.styles';

export interface SwitchProps {
  defaultStatus?: boolean;
  disabled?: boolean;
  onSwitch?: (checked: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Switch = ({
  defaultStatus = false,
  disabled = false,
  onSwitch,
  size,
  variant,
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultStatus);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const isChecked = e.target.checked;

    setChecked(isChecked);

    if (onSwitch) {
      onSwitch(isChecked);
    }
  };

  return (
    <Styled.SwitchContainer size={size}>
      <Styled.SwitchInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        $variant={variant}
      />
      <Styled.SwitchSlider size={size} />
    </Styled.SwitchContainer>
  );
};

export default Switch;
