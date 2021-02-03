import React from 'react';
import Header from '../components/Header';
import illustration from '../assets/illustration.svg';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';

function ErrorSearch() {
  return (
    <Container>
      <Header />

      <h1>Letra não encontrada</h1>

      <img src={illustration} alt="Ilustração" />

      <p>
        Essa música ainda não foi escrita, mas não fique triste, você pode
        acessar milhares de músicas realizando uma nova busca &lt;3
      </p>

      <SearchButton goBack={-1}>Nova busca</SearchButton>
    </Container>
  );
}

export default ErrorSearch;
