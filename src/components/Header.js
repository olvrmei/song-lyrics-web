import React from 'react';
import logo from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-right: 100px; // maybe do a media query
  padding-left: 100px;
`;

const Header = ({ primary, children }) => {
  return (
    <HeaderWrapper>
      <img src={primary ? logo2 : logo} alt="Lendo Música" />
      {children}
    </HeaderWrapper>
  );
};

export default Header;
