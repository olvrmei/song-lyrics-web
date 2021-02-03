import React from 'react';
import logo from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;

const Header = ({ isSelected, children }) => {
  return (
    <HeaderWrapper isSelected={isSelected}>
      <img src={isSelected ? logo2 : logo} alt="Lendo Música" />
      {children}
    </HeaderWrapper>
  );
};

export default Header;
