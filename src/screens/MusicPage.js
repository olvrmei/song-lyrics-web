import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import search from "../assets/search2.png";
import arrow from "../assets/arrow.png";

function MusicPage() {
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <header>
        <h1>Music Page</h1>
        <img src={logo} alt="Lendo Música" />
      </header>
      <p>{location.state.lyrics}</p>

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
          <p>lorem ipsum</p>
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
