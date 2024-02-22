import React, { useState } from 'react';
import * as Styled from './Alert.styles';

interface AlertProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Alert = ({ title, description, variant }: AlertProps) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <Styled.Container $variant={variant}>
          <Styled.TextContainer>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.TextContainer>
          <Styled.CloseButton
            onClick={(prev) => setShow(!prev)}
            $variant={variant}
          >
            x
          </Styled.CloseButton>
        </Styled.Container>
      )}
    </>
  );
};

export default Alert;
