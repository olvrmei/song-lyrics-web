import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../assets/search1.svg';
import search2 from '../assets/search2.svg';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.isSelected ? 'blue' : 'transparent')};
  border: 1px solid #ffb703;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 800px;
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
        <img src={isSelected ? search2 : search} alt="Lupa" />
        <ButtonText>{children}</ButtonText>
      </ButtonContent>
    </Button>
  );
};

export default SearchButton;
