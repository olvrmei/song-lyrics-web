import React, { useState, useEffect } from "react";
import "./Search.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo1.png";
import search from "../assets/search1.png";

function Search() {
  const history = useHistory();
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const getLyrics = async () => {
    //if (artist === "" || title === "") return;
    if (artist === "" || title === "") {
      history.push("/errorsearch");
    } else {
      //const response = await fetch(
      //  `https://api.lyrics.ovh/v1/${artist}/${title}`
      //);
      //
      ////const lyrics = response.body.lyrics;
      //alert(response.json());
      const lyrics = "";
      history.push("/searchresult", {
        artist: artist,
        title: title,
        lyrics: lyrics,
      });
    }
  };
  useEffect(() => {
    console.log("hiii");
  }, [artist, title]);

  return (
    <div className="Search">
      <header>
        <h1 style={{ color: "white" }}>Search Page</h1>
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
          <button type="submit">
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
