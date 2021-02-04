import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    background: grey;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 990px) {
    padding-right: 50px;
    padding-left: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 24;
  color: white;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export default GlobalStyle;
