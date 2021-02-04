import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';
import styled from 'styled-components';

const CleanButton = styled.button`
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  padding: 10px;
  border-radius: 40px;
  border: 2px solid white;
  width: 300px;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: auto;
  width: 400px;
  text-align: center;
  text-transform: capitalize;
`;

const List = styled.li`
  padding: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffb703;
  box-sizing: border-box;
  border: 2px solid #ffb703;
  border-radius: 4px;
`;

function SongList(props) {
  const songs = props.songs;
  if (songs.length < 1)
    return (
      <p
        style={{
          color: 'white',
          fontSize: 18,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Histórico de pesquisas está vazio.
      </p>
    );
  const listSongs = songs.map((song, i) => (
    <List key={i}>
      {song.artist} - {song.title}
    </List>
  ));
  return (
    <>
      <CleanButton onClick={props.delete}>Limpar Histórico</CleanButton>
      <Ul>{listSongs}</Ul>
    </>
  );
}

function HistoryPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    function loadSearches() {
      let searchStorage = JSON.parse(localStorage.getItem('search')) || [];
      setSongs(
        searchStorage.length > 1 ? searchStorage.reverse() : searchStorage
      );
    }
    loadSearches();
  }, []);

  const deleteSearches = () => {
    localStorage.clear();
    setSongs([]);
  };

  return (
    <Container>
      <Header />
      <SongList songs={songs} delete={deleteSearches} />
      <SearchButton goBack={-1}>Buscar</SearchButton>
    </Container>
  );
}

export default HistoryPage;
