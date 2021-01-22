import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import search from "../assets/search1.png";
import logo from "../assets/logo1.png";

function SearchResult() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <h1>Search Result Page</h1>
      <img src={logo} alt="Lendo Música" />
      <h1>Letra encontrada</h1>

      <Link
        to={{
          pathname: "/musicpage",
          state: location.state,
        }}
      >
        <button>
          {location.state.title}
          {location.state.artist}
        </button>
      </Link>

      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>
      <h1>aaaaa</h1>

      <h2>Não encontrou o que procurava?</h2>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <div>
          <img src={search} alt="Lupa" />
          Nova Busca
        </div>
      </button>
    </div>
  );
}

export default SearchResult;
