import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import search from '../assets/search1.svg';
import api from '../services/lyricsapi.js';
import { Container, Title } from '../globalStyles';
import styled from 'styled-components';

const HistoryButton = styled.button`
  padding: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffb703;
  box-sizing: border-box;
  border: 2px solid #ffb703;
  border-radius: 4px;
`;

const SearchButtons = styled.button`
  border: 2px solid #ffb703;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

/*
const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
`;

const ButtonText = styled.p`
  color: ${(props) => (props.isSelected ? 'white' : '#ffb703')};
  font: 1em sans-serif;
  margin-left: 20px;
  align-self: center;
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
`;

*/

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
          <input
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
          <input
            type="text"
            name="title"
            placeholder="Insira o nome da música"
            value={title}
            onChange={(val) => setTitle(val.target.value)}
            required
          />
        </Label>
        <SearchButtons type="submit">
          <img src={search} alt="Lupa" />
          <p>Buscar</p>
        </SearchButtons>
      </Form>

      <Link to="/historypage">
        <HistoryButton>Últimas buscas</HistoryButton>
      </Link>
    </Container>
  );
}

export default SearchPage;
