import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';

function SearchResult() {
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
      <h1>Letra encontrada</h1>

      <Link to={'/musicpage'}>
        <button>
          <p>{artist}</p>
          <p>{title}</p>
        </button>
      </Link>

      <h2>Não encontrou o que procurava?</h2>

      <SearchButton goBack={-1}>Nova Busca</SearchButton>
    </Container>
  );
}

export default SearchResult;
