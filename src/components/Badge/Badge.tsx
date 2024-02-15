import React, { ReactNode } from 'react';
import * as Styled from './Badge.styles';

export interface BadgeProps {
  children?: ReactNode;
  count?: number;
  maxCount?: number;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  cursor?: 'normal' | 'pointer';
  onClick?: () => void;
}

const Badge = ({
  children,
  count = 0,
  maxCount,
  variant,
  size,
  cursor,
  onClick,
}: BadgeProps) => {
  return (
    <Styled.Container onClick={onClick}>
      {children}
      <Styled.Badge variant={variant} size={size} cursor={cursor}>
        <span>
          {maxCount ? (count > maxCount ? maxCount + '+' : count) : count}
        </span>
      </Styled.Badge>
    </Styled.Container>
  );
};

export default Badge;
