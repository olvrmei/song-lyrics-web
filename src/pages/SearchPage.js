import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { ButtonContent, ButtonText, Button } from '../components/SearchButton';
import search from '../assets/search1.svg';
import api from '../services/lyricsapi.js';
import { Container, Title } from '../globalStyles';
import styled from 'styled-components';

const HistoryButton = styled.button`
  padding: 15px;
  margin-top: 40px;
  color: #ffb703;
  box-sizing: border-box;
  border: 2px solid #ffb703;
  border-radius: 4px;
  background: transparent;
  font-weight: bold;
  font-size: 16px;
  width: 340px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const Input = styled.input`
  border: 2px solid white;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  margin-top: 15px;
  background: transparent;
  color: white;
  font-size: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #828282;
  }
`;

function SearchPage() {
  const history = useHistory();
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  async function getLyrics(e) {
    e.preventDefault();
    //if (artist === '' || title === '') return;
    try {
      const response = await api.get(`${artist}/${title}`);
      console.log(response.data);
      const lyrics = response.data.lyrics;
      if (lyrics === '') {
        history.push('/errorsearch');
      } else {
        var data = [];
        data = JSON.parse(localStorage.getItem('search')) || [];
        data.push({
          artist: artist,
          title: title,
          lyrics: lyrics,
        });
        localStorage.setItem('search', JSON.stringify(data));
        history.push('/searchresult');
      }
    } catch (error) {
      console.error(error);
      history.push('/errorsearch');
    }
  }

  return (
    <Container>
      <Header />
      <Title>Buscar letra</Title>
      <Form onSubmit={getLyrics}>
        <Label for="artista">
          Artista
          <Input
            type="text"
            name="artista"
            placeholder="Insira o nome do artista"
            value={artist}
            onChange={(val) => setArtist(val.target.value)}
            required
          />
        </Label>
        <Label for="title">
          Música
          <Input
            type="text"
            name="title"
            placeholder="Insira o nome da música"
            value={title}
            onChange={(val) => setTitle(val.target.value)}
            required
          />
        </Label>
        <Button type="submit">
          <ButtonContent>
            <img src={search} alt="Lupa" />
            <ButtonText>Buscar</ButtonText>
          </ButtonContent>
        </Button>
      </Form>

      <Link to="/historypage">
        <HistoryButton>Últimas buscas</HistoryButton>
      </Link>
    </Container>
  );
}

export default SearchPage;
