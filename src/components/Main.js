import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return <MainWrapper></MainWrapper>;
};

const MainWrapper = styled.div`
  display: flex;
  border: 3px solid red;
  gap: 50px;
  padding: 2.5rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Main;
