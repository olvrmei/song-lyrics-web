import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../assets/search1.svg';
import search2 from '../assets/search2.svg';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid ${(props) => (props.isSelected ? '#219EBC' : '#ffb703')};
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
`;

const ButtonText = styled.p`
  color: ${(props) => (props.isSelected ? 'white' : '#ffb703')};
  font: 1em sans-serif;
  margin-left: 20px;
  align-self: center;
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
`;

const Image = styled.img`
  background: ${(props) => (props.isSelected ? '#219EBC' : 'transparent')};
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
        <Image src={isSelected ? search2 : search} alt="Lupa" />
        <ButtonText isSelected={isSelected}>{children}</ButtonText>
      </ButtonContent>
    </Button>
  );
};

export default SearchButton;
