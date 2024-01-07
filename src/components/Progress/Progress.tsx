import React from 'react';
import * as Styled from './Progress.styles';

interface ProgressProps {
  progress?: number;
  variant?: 'linear' | 'circle';
  size?: number;
  strokeWidth?: number;
}

const Progress = ({
  progress = 50,
  size = 100,
  strokeWidth = 6,
  variant = 'linear',
}: ProgressProps) => {
  const viewBox = `0 0 ${size} ${size}`;
  const r = (size - strokeWidth) / 2;
  const circle = 2 * Math.PI * r;
  const offset = circle - (progress / 100) * circle;

  return (
    <React.Fragment>
      {variant === 'linear' && (
        <Styled.LinearWrapper>
          <Styled.LinearProgressBar
            data-testid="linear-progress"
            $progress={progress}
          />
        </Styled.LinearWrapper>
      )}
      {variant === 'circle' && (
        <Styled.Svg width={size} height={size} viewBox={viewBox}>
          <Styled.CircleBackground
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={strokeWidth}
          />
          <Styled.CircleProgress
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={strokeWidth}
            strokeDasharray={circle}
            strokeDashoffset={offset}
            data-testid="circle-progress"
          />
        </Styled.Svg>
      )}
    </React.Fragment>
  );
};

export default Progress;
