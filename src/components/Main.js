import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emptyCV from './Utils/EmptyCV';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

const Main = () => {
  const [CV, setCV] = useState(emptyCV);

  useEffect((prev) => {
    console.log(CV);
  }, []);

  return (
    <MainWrapper>
      <InputWrapper>
        <CVForm />
      </InputWrapper>
      <PreviewWrapper>
        <CVPreview CV={CV} />
      </PreviewWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  background-color: #f8f8f8;
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
`;

const PreviewWrapper = styled.div`
  background-color: #f8f8f8;
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
`;

export default Main;
