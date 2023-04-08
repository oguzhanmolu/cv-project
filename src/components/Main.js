import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emptyCV from './Utils/EmptyCV';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [cv, setCV] = useState(emptyCV);

  useEffect(() => {
    console.log(cv);
  });

  // Update cv state with personal inputs
  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      handlePhotoUpload(e);
      return;
    }

    setCV((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

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

  // Add education input section
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

  // Add experience input section
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

  return (
    <MainWrapper>
      <ContentWrapper>
        <CVForm
          cv={cv}
          onChangePersonal={handleChangePersonal}
          onChangeEducation={handleChangeEducation}
          onAddEducation={handleAddEducation}
          onDeleteEducation={handleDeleteEducation}
          onChangeExperience={handleChangeExperience}
          onAddExperience={handleAddExperience}
          onDeleteExperience={handleDeleteExperience}
        />
      </ContentWrapper>
      <ContentWrapper>
        <CVPreview cv={cv} />
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  width: 900px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
  background-color: #f0f0f0;
`;

export default Main;
