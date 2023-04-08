import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emptyCV from './Utils/EmptyCV';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [cv, setCV] = useState(emptyCV);

  useEffect((prev) => {
    console.log(cv);
  }, []);

  // Personal input onChange
  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

  // Education input onChange
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(cv);

    setCV((prevState) => {
      const currentState = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });

      return { ...prevState, education: [...currentState] };
    });
  };

  // Add new education section
  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          uniName: '',
          city: 'TestCity',
          degree: 'Master',
          subject: 'Computer Programming',
          from: '2021',
          to: '2023',
        },
      ],
    }));
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
