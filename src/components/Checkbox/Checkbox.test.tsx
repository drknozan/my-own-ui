import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  test('renders checkbox with label', () => {
    const onChange = jest.fn();

    render(<Checkbox label="Checkbox component" onChange={onChange} />);

    const checkboxElement = screen.getByText('Checkbox component');

    expect(checkboxElement).toBeInTheDocument();
  });

  test('checkbox toggles state correctly when clicked', () => {
    const onChange = jest.fn();

    render(<Checkbox label="Checkbox component" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox')
      .parentElement as HTMLLabelElement;
    const checkboxInput = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkboxInput).toBeChecked();

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledWith(false);
    expect(checkboxInput).not.toBeChecked();
  });

  test('checkbox does not toggle when disabled', () => {
    const onChange = jest.fn();

    render(
      <Checkbox label="Checkbox component" onChange={onChange} disabled />
    );

    const checkbox = screen.getByRole('checkbox')
      .parentElement as HTMLLabelElement;
    const checkboxInput = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChange).not.toHaveBeenCalled();
    expect(checkboxInput).not.toBeChecked();
  });
});
