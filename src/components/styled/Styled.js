import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: orange;
`;

export const Title = styled.h1`
  color: red;
  font-size: 2em;
`;

export const BiggerTitle = styled(Title)`
  color: red;
  font-size: 4em;
`;

export const StyledButton = styled.button`
  outline: none;
  font-size: 2em;
  background-color: #333;
  color: #fff;
`;