import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.primary ? 'white' : 'linear-gradient(#023047, #000000)'};

  @media screen and (max-width: 990px) {
    padding-right: 50px;
    padding-left: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin-top: 20px;
`;

export default GlobalStyle;
