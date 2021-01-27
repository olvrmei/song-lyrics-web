import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../assets/search1.svg';
import './SearchButton.css';

const SearchButton = (props) => {
  const history = useHistory();
  return (
    <button
      className="Search-button"
      onClick={() => {
        history.goBack();
      }}
    >
      <div className="Button-space">
        <img src={search} alt="Lupa" />
        <p className="Button-text">{props.label}</p>
      </div>
    </button>
  );
};

export default SearchButton;
