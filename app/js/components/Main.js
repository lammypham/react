import styled from 'styled-components';
import backgroundImage from '../../assets/images/coffee.jpg'

const Main = styled.section`
  padding: 4em;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 1080px;
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
`;

export default Main;
