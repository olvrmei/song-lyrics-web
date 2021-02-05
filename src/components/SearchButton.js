import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../assets/search1.svg';
import search2 from '../assets/search2.svg';
import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${(props) => (props.isSelected ? '#219EBC' : '#ffb703')};
  box-sizing: border-box;
  border-radius: 4px;
  //max-width: 800px;
  //min-width: 100px;
  width: 340px;
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
`;

export const ButtonText = styled.p`
  color: ${(props) => (props.isSelected ? 'white' : '#ffb703')};
  font-weight: bold;
  font-size: 16px;
  margin-left: 15px;
  align-self: center;
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
      <ButtonContent isSelected={isSelected}>
        <img src={isSelected ? search2 : search} alt="Lupa" />
        <ButtonText isSelected={isSelected}>{children}</ButtonText>
      </ButtonContent>
    </Button>
  );
};

export default SearchButton;
