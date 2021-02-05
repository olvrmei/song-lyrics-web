import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import { Container, Title } from '../globalStyles';
import styled from 'styled-components';

const BottomText = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #219ebc;

  box-sizing: border-box;
  max-width: 800px;
  min-width: 300px;
  margin-bottom: 40px;
  margin-top: 40px;
  padding: 30px;
  border: 2px solid #219ebc;
  border-radius: 4px;

  color: white;
  text-transform: capitalize;
  text-align: left;
  font-weight: bold;
  line-height: 1.5;
  font-size: 18px;
`;

function ResultPage() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('search'));
    let ly = data.reverse();
    setArtist(ly[0].artist);
    setTitle(ly[0].title);
  }, []);

  return (
    <Container>
      <Header />
      <Title>Letra encontrada</Title>

      <Link to={'/musicpage'}>
        <Button>
          {artist} <br /> {title}
        </Button>
      </Link>

      <BottomText>Não encontrou o que procurava?</BottomText>

      <SearchButton goBack={-1}>Nova Busca</SearchButton>
    </Container>
  );
}

export default ResultPage;
