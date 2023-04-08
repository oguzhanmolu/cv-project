import React from 'react';
import styled from 'styled-components';
import cvIcon from '../assets/cv-icon.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <IconGroup src={cvIcon}></IconGroup>
      <span>CV MAKER</span>
    </HeaderWrapper>
  );
};

const IconGroup = styled.img`
  height: 60px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export default Header;
