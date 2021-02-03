import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';

function SongList(props) {
  const songs = props.songs;
  if (songs.length < 1) return <p>Histórico de pesquisas está vazio.</p>;
  const listSongs = songs.map((song, i) => (
    <li key={i}>
      {song.artist} - {song.title}
    </li>
  ));
  return (
    <div>
      <div>
        <button onClick={props.delete}>Limpar Histórico</button>
      </div>
      <div>
        <ul>{listSongs}</ul>
      </div>
    </div>
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

      <div>
        <SongList songs={songs} delete={deleteSearches} />
      </div>
      <div>
        <SearchButton goBack={-1}>Buscar</SearchButton>
      </div>
    </Container>
  );
}

export default HistoryPage;
