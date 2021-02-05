import React from 'react';
import Header from '../components/Header';
import illustration from '../assets/illustration.svg';
import SearchButton from '../components/SearchButton';
import { Container, Title } from '../globalStyles';
import styled from 'styled-components';

const Image = styled.img`
  margin-bottom: 40px;
  margin-top: 40px;
`;

const Text = styled.p`
  font-size: 16px;
  //margin-top: 20px;
  margin-bottom: 40px;
  color: white;
  max-width: 500px;
  text-align: center;
`;

function ErrorPage() {
  return (
    <Container>
      <Header />

      <Title>Letra não encontrada</Title>

      <Image src={illustration} alt="Ilustração" />

      <Text>
        Essa música ainda não foi escrita, mas não fique triste, você pode
        acessar milhares de músicas realizando uma nova busca &lt;3
      </Text>

      <SearchButton goBack={-1}>Nova busca</SearchButton>
    </Container>
  );
}

export default ErrorPage;
