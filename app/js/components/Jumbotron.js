import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Jumbotron = styled.div`
  border-radius: 3px;
  background: rgba(3, 0, 0, 0.7);
  height: 800px;
  padding: 10px;
  animation: ${slideIn} ease-in 1 .5s;
`;

export default Jumbotron;
