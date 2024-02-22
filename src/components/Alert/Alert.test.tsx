import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Alert from './Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  test('renders with given title properly', () => {
    render(<Alert title="Alert title" description="Alert description" />);

    const alert = screen.getByText('Alert title');

    expect(alert).toBeInTheDocument();
  });

  test('renders with given description', () => {
    render(<Alert title="Alert title" description="Alert description" />);

    const alert = screen.getByText('Alert description');

    expect(alert).toBeInTheDocument();
  });

  test('applies given variant', () => {
    render(
      <Alert
        title="Alert title"
        description="Alert description"
        variant="warning"
      />
    );

    const alert = screen.getByText('Alert title').parentElement?.parentElement;

    expect(alert).toHaveStyle(`border: 1px solid #ffd700; color: #ffd700;`);
  });

  test('removed from screen when click the close button', () => {
    render(<Alert title="Alert title" description="Alert description" />);

    const alert = screen.getByText('Alert title');
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    waitFor(() => {
      expect(alert).not.toBeVisible();
    });
  });
});
