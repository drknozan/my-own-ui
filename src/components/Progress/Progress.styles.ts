import styled from 'styled-components';

export const LinearWrapper = styled.div`
  height: 6px;
  width: 100%;
  overflow: hidden;
  background-color: #e0e0e0;
  border-radius: 10px;
`;

export const LinearProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: #007bff;
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;

export const Svg = styled.svg`
  transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle<{ strokeWidth: number }>`
  fill: none;
  stroke: #e0e0e0;
  stroke-width: ${({ strokeWidth }) => strokeWidth || 10}px;
`;

export const CircleProgress = styled.circle<{ strokeWidth: number }>`
  fill: none;
  stroke: #007bff;
  stroke-width: ${({ strokeWidth }) => strokeWidth || 10}px;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease-in-out;
`;
