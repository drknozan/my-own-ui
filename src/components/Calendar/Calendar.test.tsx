import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calendar from './Calendar';
import '@testing-library/jest-dom';

describe('Calendar', () => {
  test('renders component properly', () => {
    render(<Calendar onChange={() => {}} />);
  });

  test('displays the current month and year', () => {
    render(<Calendar onChange={() => {}} />);

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleDateString('en-US', {
      month: 'long',
    });
    const currentYear = currentDate.getFullYear();

    expect(
      screen.getByText(`${currentMonth} ${currentYear}`)
    ).toBeInTheDocument();
  });

  test('changes to the next month when next button is clicked', () => {
    render(<Calendar onChange={() => {}} />);

    const nextButton = screen.getByLabelText('Next Button');

    fireEvent.click(nextButton);

    const nextMonth = screen.getByText(/March 2024/i);

    expect(nextMonth).toBeInTheDocument();
  });

  test('changes to the previous month when previous button is clicked', () => {
    render(<Calendar onChange={() => {}} />);

    const previousButton = screen.getByLabelText('Previous Button');

    fireEvent.click(previousButton);

    const previousMonth = screen.getByText(/January 2024/i);

    expect(previousMonth).toBeInTheDocument();
  });

  test('selects a date when a day is clicked', () => {
    const onChange = jest.fn();

    const { getByText } = render(<Calendar onChange={onChange} />);

    const dayToSelect = getByText('15');

    fireEvent.click(dayToSelect);

    expect(onChange).toHaveBeenCalled();
  });
});
