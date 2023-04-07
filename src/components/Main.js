import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emptyCV from './Utils/EmptyCV';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

const Main = () => {
  const [cv, setCV] = useState(emptyCV);

  useEffect((prev) => {
    console.log(cv);
  }, []);

  // Personal Input onChange
  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

  const handleChangeEducation = () => {
    console.log('test');
  };

  const handleAddEducation = () => {
    console.log('test');
  };

  return (
    <MainWrapper>
      <InputWrapper>
        <CVForm
          cv={cv}
          onChangePersonal={handleChangePersonal}
          onChangeEducation={handleChangeEducation}
          onAddEducation={handleAddEducation}
        />
      </InputWrapper>
      <PreviewWrapper>
        <CVPreview cv={cv} />
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
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const PreviewWrapper = styled.div`
  background-color: #f0f0f0;
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
`;

export default Main;
