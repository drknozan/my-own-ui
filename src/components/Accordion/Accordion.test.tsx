import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Accordion from './Accordion';
import '@testing-library/jest-dom';

describe('Accordion', () => {
  test('renders properly', () => {
    render(<Accordion title="Title" content={<div>Content</div>} />);

    expect(screen.getByText('Title')).toBeInTheDocument();

    waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeVisible();
    });
  });

  test('opens and closes on title click', async () => {
    render(<Accordion title="Title" content={<div>Content</div>} />);

    fireEvent.click(screen.getByText('Title'));

    expect(screen.getByText('Content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Title'));

    waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeVisible();
    });
  });
});
