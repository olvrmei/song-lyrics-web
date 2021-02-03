import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../assets/search1.svg';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.isSelected ? 'black' : 'transparent')};
  border: 1px solid #ffb703;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
`;

const ButtonText = styled.p`
  color: #ffb703;
  font: 1em sans-serif;
`;

const SearchButton = ({ goBack, isSelected, children }) => {
  const history = useHistory();
  return (
    <Button
      isSelected={isSelected}
      onClick={() => {
        history.go(goBack);
      }}
    >
      <ButtonContent>
        <img src={search} alt="Lupa" />
        <ButtonText>{children}</ButtonText>
      </ButtonContent>
    </Button>
  );
};

export default SearchButton;
