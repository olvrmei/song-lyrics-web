import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo1.png";
import search from "../assets/search1.png";

function HistoryPage() {
  const history = useHistory();
  return (
    <div>
      <header>
        <h1>History Page</h1>
        <img src={logo} alt="Lendo Música" />
      </header>

      <div>
        <button>Limpar Histórico X</button>
      </div>
      <div>
        <li></li>
      </div>
      <div>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={search} alt="Lupa" />
          Buscar
        </button>
      </div>
    </div>
  );
}

export default HistoryPage;
