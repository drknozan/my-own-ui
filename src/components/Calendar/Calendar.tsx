import React, { useState } from 'react';
import * as Styled from './Calendar.styles';

interface CalendarProps {
  onChange: (selectedDate: Date) => void;
}

const Calendar = ({ onChange }: CalendarProps) => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
    onChange(selectedDate);
  };

  const setNextMonth = () => {
    const nextMonth = new Date(year, month + 1);

    setMonth(nextMonth.getMonth());
    setYear(nextMonth.getFullYear());
  };

  const setPreviousMonth = () => {
    const previousMonth = new Date(year, month - 1);

    setMonth(previousMonth.getMonth());
    setYear(previousMonth.getFullYear());
  };

  const generateCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: JSX.Element[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <Styled.Day
          key={i}
          onClick={() => {
            handleDateSelect(new Date(year, month, i));
          }}
          $selected={
            year === selectedDate.getFullYear() &&
            month === selectedDate.getMonth() &&
            i === selectedDate.getDate()
          }
        >
          {i}
        </Styled.Day>
      );
    }

    return days;
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Date>
          {new Date(year, month)?.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </Styled.Date>
        <Styled.ButtonsContainer>
          <Styled.PrevButtonWrapper
            onClick={setPreviousMonth}
            aria-label="Previous Button"
          >
            <Styled.PrevButton></Styled.PrevButton>
          </Styled.PrevButtonWrapper>
          <Styled.NextButtonWrapper
            onClick={setNextMonth}
            aria-label="Next Button"
          >
            <Styled.NextButton />
          </Styled.NextButtonWrapper>
        </Styled.ButtonsContainer>
      </Styled.Header>
      <Styled.Divider />
      <Styled.Body>{generateCalendar()}</Styled.Body>
    </Styled.Container>
  );
};

export default Calendar;
