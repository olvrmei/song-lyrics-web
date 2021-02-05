import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import arrow from '../assets/arrow.svg';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';
import styled from 'styled-components';

const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: white;
  color: #219ebc;
  border: 2px solid transparent;
  justify-content: center;
  align-content: center;
`;

const BackButtonText = styled.p`
  padding-left: 10px;
  align-self: center;
  font-size: 16px;
`;

const Title = styled.h1`
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

const BottomText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
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
      <Header primary>
        <BackButton
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={arrow} alt="Seta" />
          <BackButtonText>Voltar para a busca</BackButtonText>
        </BackButton>
      </Header>
      <Container primary>
        <div>
          <Title>{title}</Title>
          <Text>{lyrics}</Text>
        </div>
        <BottomText>Curtiu? Busque mais letras.</BottomText>
        <SearchButton isSelected={true} goBack={-2}>
          Nova busca
        </SearchButton>
      </Container>
    </>
  );
}

export default MusicPage;
