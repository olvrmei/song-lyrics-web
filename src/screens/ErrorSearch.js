import React from "react";
import { useHistory } from "react-router-dom";
import search from "../assets/search1.png";
import logo from "../assets/logo1.png";

function ErrorSearch() {
  const history = useHistory();
  return (
    <div>
      <header>
        <h1>Error Page</h1>
        <img src={logo} alt="Lendo Música" />
      </header>

      <h1>Letra não encontrada</h1>

      <img scr="" alt="" />

      <p>
        Essa música ainda não foi escrita, mas não fique triste, você pode
        acessar milhares de músicas realizando uma nova busca &lt;3
      </p>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={search} alt="Lupa" />
        Nova busca
      </button>
    </div>
  );
}

export default ErrorSearch;
