import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Switch from './Switch';
import '@testing-library/jest-dom';

describe('Switch', () => {
  test('renders with default status', () => {
    const onSwitch = jest.fn();

    render(<Switch onSwitch={onSwitch} />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    expect(switchInput.checked).toBe(false);
  });

  test('calls onSwitch prop when clicked', () => {
    const onSwitch = jest.fn();

    render(<Switch onSwitch={onSwitch} />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(switchInput);

    expect(onSwitch).toHaveBeenCalledWith(true);
  });

  test('changes status when clicked', () => {
    const onSwitch = jest.fn();

    render(<Switch onSwitch={onSwitch} />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(switchInput);

    expect(switchInput.checked).toBe(true);
  });

  test('renders with default status checked', () => {
    const onSwitch = jest.fn();

    render(<Switch defaultStatus={true} onSwitch={onSwitch} />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    expect(switchInput.checked).toBe(true);
  });

  test('calls onSwitch prop with true when unchecked', () => {
    const onSwitch = jest.fn();

    render(<Switch defaultStatus={false} onSwitch={onSwitch} />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(switchInput);

    expect(onSwitch).toHaveBeenCalledWith(true);
  });

  test('disabled when disabled property is true', () => {
    const onSwitch = jest.fn();

    render(
      <Switch defaultStatus={false} onSwitch={onSwitch} disabled={true} />
    );

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(switchInput);

    expect(switchInput).toBeDisabled();
  });

  test('will not call onClick when disabled property is true', () => {
    const onSwitch = jest.fn();

    render(
      <Switch defaultStatus={false} onSwitch={onSwitch} disabled={true} />
    );

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(switchInput);

    expect(onSwitch).not.toHaveBeenCalled();
  });

  test('renders with given custom size', () => {
    render(<Switch size="large" />);

    const switchInput = screen.getByRole('checkbox') as HTMLInputElement;
    const switchContainer = switchInput.parentElement;

    expect(switchContainer).toHaveStyle('width: 60px; height: 36px;');
  });
});
