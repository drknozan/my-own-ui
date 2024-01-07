import React from 'react';
import { render } from '@testing-library/react';
import Progress from './Progress';
import '@testing-library/jest-dom';

describe('Progress', () => {
  test('renders linear progress properly', () => {
    const { getByTestId } = render(<Progress variant="linear" />);

    const linearProgress = getByTestId('linear-progress');

    expect(linearProgress).toBeInTheDocument();
  });

  test('renders circle progress properly', () => {
    const { getByTestId } = render(<Progress variant="circle" />);

    const circleProgress = getByTestId('circle-progress');

    expect(circleProgress).toBeInTheDocument();
  });

  test('linear progress has the correct width', () => {
    const progressValue = 75;

    const { getByTestId } = render(
      <Progress variant="linear" progress={progressValue} />
    );

    const linearProgress = getByTestId('linear-progress');

    expect(linearProgress).toHaveStyle(`width: ${progressValue}%`);
  });

  test('circle progress has the correct strokeDashoffset', () => {
    const progressValue = 25;
    const size = 120;
    const strokeWidth = 8;

    const { getByTestId } = render(
      <Progress
        variant="circle"
        progress={progressValue}
        size={size}
        strokeWidth={8}
      />
    );

    const circleProgress = getByTestId('circle-progress');

    const r = (size - strokeWidth) / 2;
    const circle = 2 * Math.PI * r;
    const expectedOffset = circle - (progressValue / 100) * circle;

    expect(circleProgress).toHaveAttribute(
      'stroke-dashoffset',
      `${expectedOffset}`
    );
  });

  test('applies custom size and strokeWidth to circle progress', () => {
    const customSize = 150;
    const customStrokeWidth = 10;

    const { getByTestId } = render(
      <Progress
        variant="circle"
        size={customSize}
        strokeWidth={customStrokeWidth}
      />
    );

    const circleProgress = getByTestId('circle-progress');

    expect(circleProgress).toHaveAttribute('cx', `${customSize / 2}`);
    expect(circleProgress).toHaveAttribute(
      'stroke-width',
      `${customStrokeWidth}`
    );
  });
});
