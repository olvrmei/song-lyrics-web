import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo2.svg';
import search from '../assets/search2.svg';
import arrow from '../assets/arrow.svg';

function MusicPage() {
  const history = useHistory();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('search'));
    let ly = data.reverse();
    setLyrics(ly[0].lyrics);
  }, []);

  return (
    <div>
      <header>
        <img src={logo} alt="Lendo Música" />
      </header>
      <body>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={arrow} alt="Seta" />
          Voltar para a busca
        </button>
        <div>
          <p>{lyrics}</p>
        </div>
        <h2>Curtiu? Busque mais letras.</h2>
        <button
          onClick={() => {
            history.go(-2);
          }}
        >
          <img src={search} alt="Lupa" />
          Nova busca
        </button>
      </body>
    </div>
  );
}

export default MusicPage;
