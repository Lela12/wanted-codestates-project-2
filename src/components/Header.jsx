import React from 'react';
import styled from 'styled-components';
import LogoBar from './LogoBar';
import NabBar from './NavBar';

const HeaderWrap = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #005fcc;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <LogoBar />
      <NabBar />
    </HeaderWrap>
  );
};

export default Header;
