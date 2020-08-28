import React from 'react';
import styled from 'styled-components';

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
      <Title>
        Styled Title
      </Title>
    </Section>
  )
}

export default App;