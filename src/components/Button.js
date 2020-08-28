import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  color: ${props => props.primary ? 'ref' : 'blue'};
  font-size: 1em;
`;

const Button = ({ primary, children }) => {
  return (
    <StyledButton primary = {primary}>
      {children}
    </StyledButton>
  )
}

export default Button;