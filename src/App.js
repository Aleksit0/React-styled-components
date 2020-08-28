import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const Title = styled.h1`
  color: orange;
  font-size: 5  rem
`;

const Section = styled.section`
  padding: 1em;
  width: 50%;
  background-color: blue;
`;

const App = () => {
  return (
    <Section>
      <Button primary> Click me </Button>
      <Button> Click me </Button>
    </Section>
  )
}

export default App;