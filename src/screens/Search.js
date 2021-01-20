import './Search.css';

function Search() {
  return (
    <div className="Search">
      <h1>Search Page</h1>

      <body className="Search-body">
        <h2 className="Search-search">
          Buscar letra
        </h2>
        <form className="Search-form">
          <label className="Search-label">
            Artista
            <input
              className="Search-input"
              type="text" 
              name="artist" 
              placeholder="Insira o nome do artista"
            />
          </label>
          <label className="Search-label">
            Música
            <input
              className="Search-input"
              type="text" 
              name="song" 
              placeholder="Insira o nome da música"
              />
          </label>
          <input type="submit" value="Buscar" />
          <button>Últimas buscas</button>
        </form>
      </body>
    </div>
  );
}

export default Search;