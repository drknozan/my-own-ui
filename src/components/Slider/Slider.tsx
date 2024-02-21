import React from 'react';
import * as Styled from './Slider.styles';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

const Slider = ({
  min,
  max,
  step,
  value,
  disabled = false,
  onChange,
}: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newValue = parseInt(event.target.value);

    onChange(newValue);
  };

  return (
    <Styled.Slider
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    ></Styled.Slider>
  );
};

export default Slider;
