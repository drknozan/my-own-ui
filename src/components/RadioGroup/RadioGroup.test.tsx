import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RadioGroup, { RadioOption } from './RadioGroup';
import '@testing-library/jest-dom';

const options: RadioOption[] = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
];

describe('RadioGroup', () => {
  test('renders radio options', () => {
    render(<RadioGroup options={options} name="test" onChange={() => {}} />);

    options.forEach((option) => {
      const radioOption = screen.getByLabelText(
        option.label
      ) as HTMLInputElement;

      expect(radioOption).toBeInTheDocument();
      expect(radioOption.type).toBe('radio');
      expect(radioOption.name).toBe('test');
      expect(radioOption.value).toBe(option.value);
    });
  });

  test('calls onChange when a radio option is clicked', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup options={options} name="test" onChange={handleChange} />
    );

    const radioOption = screen.getByLabelText('Option 1') as HTMLInputElement;

    fireEvent.click(radioOption);

    expect(handleChange).toHaveBeenCalledWith('Option 1');
  });

  test('disables radio option when disabled prop is true', () => {
    render(
      <RadioGroup
        options={options}
        name="test"
        onChange={() => {}}
        disabled={true}
      />
    );

    options.forEach((option) => {
      const radioOption = screen.getByLabelText(
        option.label
      ) as HTMLInputElement;

      expect(radioOption.disabled).toBe(true);
    });
  });
});
