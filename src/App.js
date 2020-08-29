import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import {Wrapper} from './components/styled/Styled';
import {Title} from './components/styled/Styled';
import {BiggerTitle} from './components/styled/Styled';
import {StyledButton} from './components/styled/Styled';

const App = () => {
  return (
    <Wrapper>
      <Title>Normal title</Title>
      <BiggerTitle>Bigger title</BiggerTitle>
      <StyledButton>Click me</StyledButton>
      <Button>Another button</Button>
      <Button>Another button</Button>
    </Wrapper>
  )
}

export default App;