import React, { useState } from 'react';
import './Search.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import search from '../assets/search1.svg';
import api from '../services/lyricsapi.js';

function Search() {
  const history = useHistory();
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  async function getLyrics(e) {
    e.preventDefault();
    if (artist === '' || title === '') return;
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
    <div className="Search">
      <header>
        <img src={logo} alt="Lendo Música" />
      </header>
      <body className="Search-body">
        <h2 className="Search-search">Buscar letra</h2>
        <form className="Search-form" onSubmit={getLyrics}>
          <label className="Search-label">
            Artista
            <input
              className="Search-input"
              type="text"
              placeholder="Insira o nome do artista"
              value={artist}
              onChange={(val) => setArtist(val.target.value)}
            />
          </label>
          <label className="Search-label">
            Música
            <input
              className="Search-input"
              type="text"
              placeholder="Insira o nome da música"
              value={title}
              onChange={(val) => setTitle(val.target.value)}
            />
          </label>
          <button className="Search-button" type="submit">
            <img src={search} alt="Lupa" />
            Buscar
          </button>
        </form>
        <Link to="/historypage">
          <button>Últimas buscas</button>
        </Link>
      </body>
    </div>
  );
}

export default Search;
