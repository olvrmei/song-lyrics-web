import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import arrow from '../assets/arrow.svg';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';
import styled from 'styled-components';

const BackButton = styled.button`
  background-color: white;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #219ebc;
  padding: 20px;
  border: solid transparent;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: left;
  font-size: 24px;
  text-transform: capitalize;
  margin-top: 20px;
`;

const Text = styled.p`
  text-align: left;
  max-width: 400px;
  line-height: 2;
  margin-bottom: 20px;
  margin-top: 20px;
`;

function MusicPage() {
  const history = useHistory();
  const [lyrics, setLyrics] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('search'));
    let ly = data.reverse();
    setLyrics(ly[0].lyrics);
    setTitle(ly[0].title);
  }, []);

  return (
    <>
      <Header isSelected={true}>
        <BackButton
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={arrow} alt="Seta" />
          <p>Voltar para a busca</p>
        </BackButton>
      </Header>
      <Container>
        <div>
          <Title>{title}</Title>
          <Text>{lyrics}</Text>
        </div>
        <h2>Curtiu? Busque mais letras.</h2>
        <SearchButton isSelected={true} goBack={-2}>
          Nova busca
        </SearchButton>
      </Container>
    </>
  );
}

export default MusicPage;
