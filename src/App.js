import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 5rem
`;

const App = () => {
  return (
    <div>
      <Title>
        Styled Title
      </Title>
    </div>
  )
}

export default App;