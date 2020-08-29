import React from 'react';
import styled from 'styled-components';

const PropsButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  color: ${props => props.primary ? 'red' : 'blue'};
  font-size: 1em;
`;

const ThemedButton = styled.button`
  color: ${(props => props.theme.colors.dark)};
  @media ${({theme}) => theme.media_queries.phone_rez} {
    font-size: .5rem;
    color: black;
  };
`;

const Button = ({ primary, children }) => {
  return (
    <ThemedButton primary = {primary}>
      {children}
    </ThemedButton>
  )
}

export default Button;