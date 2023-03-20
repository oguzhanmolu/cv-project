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
  margin: 0 150px 0 150px;

  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  width: 800px;
  padding: 1rem;
`;

export default Main;
