import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Slider from './Slider';
import '@testing-library/jest-dom';

describe('Slider', () => {
  test('renders properly', () => {
    const handleChange = jest.fn();

    render(<Slider min={0} max={100} onChange={handleChange} />);
    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
  });

  test('renders with custom props', () => {
    const handleChange = jest.fn();

    render(
      <Slider min={10} max={50} step={5} value={20} onChange={handleChange} />
    );
    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '50');
    expect(slider).toHaveAttribute('step', '5');
    expect(slider).toHaveAttribute('value', '20');
  });

  test('triggers onChange callback when value changes', () => {
    const handleChange = jest.fn();

    render(<Slider min={0} max={100} onChange={handleChange} />);
    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: '70' } });

    expect(handleChange).toHaveBeenCalledWith(70);
  });

  test('does not trigger onChange callback when disabled', () => {
    const handleChange = jest.fn();

    render(
      <Slider
        min={0}
        max={100}
        onChange={handleChange}
        disabled={true}
      ></Slider>
    );

    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: '50' } });

    expect(handleChange).not.toHaveBeenCalled();
  });
});
