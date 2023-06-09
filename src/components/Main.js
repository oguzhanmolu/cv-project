import React, { useState } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import emptyCV from './Utils/EmptyCV';
import exampleCV from './Utils/exampleCV';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  // Hook
  const [cv, setCV] = useState(emptyCV);

  // Update cv state with personal inputs
  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    // If input is file
    if (type === 'file') {
      handlePhotoUpload(e);
      return;
    }

    // Set
    setCV((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCV((prevState) => ({
        ...prevState,
        personalInfo: { ...prevState.personalInfo, [name]: reader.result },
      }));
    };
    reader.readAsDataURL(file);
    console.log(reader);
  };

  // Update cv state with education inputs
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

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

  // Add new education input section
  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          uniName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  // Delete education input section
  const handleDeleteEducation = (id) => {
    setCV((prevState) => {
      const currentState = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...currentState] };
    });
  };

  // Update cv state with experience inputs
  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const currentState = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...currentState] };
    });
  };

  // Add new experience input section
  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        { id: uuidv4(), position: '', company: '', city: '', from: '', to: '' },
      ],
    }));
  };

  // Delete experience input section
  const handleDeleteExperience = (id) => {
    setCV((prevState) => {
      const currentState = prevState.experience.filter(
        (ExperienceItem) => ExperienceItem.id !== id
      );
      return { ...prevState, experience: [...currentState] };
    });
  };

  // Load example CV
  const handleLoadExampleCV = () => setCV(exampleCV);

  // Reset Inputs
  const handleResetInputs = () => setCV(emptyCV);

  return (
    <MainWrapper>
      {/* CV inputs (left side) */}
      <InputWrapper>
        <CVForm
          cv={cv}
          onChangePersonal={handleChangePersonal}
          onChangeEducation={handleChangeEducation}
          onAddEducation={handleAddEducation}
          onDeleteEducation={handleDeleteEducation}
          onChangeExperience={handleChangeExperience}
          onAddExperience={handleAddExperience}
          onDeleteExperience={handleDeleteExperience}
          onLoadExampleCV={handleLoadExampleCV}
          onResetInputs={handleResetInputs}
        />
      </InputWrapper>

      {/* CV preview contents (right side) */}
      <ContentWrapper>
        <CVPreview cv={cv} />
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;

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

const ContentWrapper = styled.div`
  top: 0;
  position: sticky;
  min-height: 1100px;
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
  background-color: #f0f0f0;
`;

export default Main;
