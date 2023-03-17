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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px;
  background-color: #323232;
  color: white;
  font-size: 3.25rem;
  font-weight: bold;
`;

export default Header;
