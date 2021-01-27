import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import SearchButton from '../components/SearchButton';

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
    <div>
      <header>
        <img src={logo} alt="Lendo Música" />
      </header>
      <h1>Letra encontrada</h1>

      <Link to={'/musicpage'}>
        <button>
          <p>{artist}</p>
          <p>{title}</p>
        </button>
      </Link>

      <h2>Não encontrou o que procurava?</h2>

      <SearchButton label={'Nova Busca'} />
    </div>
  );
}

export default SearchResult;
