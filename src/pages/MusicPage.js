import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import arrow from '../assets/arrow.svg';
import SearchButton from '../components/SearchButton';
import { Container } from '../globalStyles';

function MusicPage() {
  const history = useHistory();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('search'));
    let ly = data.reverse();
    setLyrics(ly[0].lyrics);
  }, []);

  return (
    <Container>
      <Header isSelected={true}></Header>
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
      <SearchButton isSelected={true} goBack={-2}>
        Nova busca
      </SearchButton>
    </Container>
  );
}

export default MusicPage;
