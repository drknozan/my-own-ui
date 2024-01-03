import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import '@testing-library/jest-dom';

describe('Input', () => {
  test('renders input', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with label and handles input', async () => {
    render(<Input label="Username" />);

    expect(screen.getByText('Username')).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();

    userEvent.type(inputElement, 'Testing');

    await waitFor(() => {
      expect(inputElement.value).toBe('Testing');
    });
  });

  test('renders success variant with label color', () => {
    render(<Input label="Username" variant="success" />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveStyle('border: 1px solid #00a859;');
    expect(screen.getByText('Username')).toHaveStyle('color: #00a859');
  });

  test('renders with error variant with label color', () => {
    render(<Input label="Username" variant="error" />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveStyle('border: 1px solid #ff0000;');
    expect(screen.getByText('Username')).toHaveStyle('color: #ff0000');
  });
});
