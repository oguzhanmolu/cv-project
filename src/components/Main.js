import React from 'react';
import styled from 'styled-components';
import PersonalInput from './CVForm/PersonalInput';
import EducationInput from './CVForm/EducationInput';
import ExperienceInput from './CVForm/ExperienceInput';

const Main = () => {
  return (
    <MainWrapper>
      <InputWrapper>
        <PersonalInput />
        <EducationInput />
        <ExperienceInput />
      </InputWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  background-color: #f8f8f8;
  width: 800px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
`;

export default Main;
