import React, { useState } from 'react';
import styled from 'styled-components';
import PersonalInput from './CVForm/PersonalInput';
import EducationInput from './CVForm/EducationInput';
import ExperienceInput from './CVForm/ExperienceInput';
import PersonalPreview from './CVPreview/PersonalPreview';
import EducationPreview from './CVPreview/EducationPreview';
import ExperiencePreview from './CVPreview/ExperiencePreview';

const Main = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  return (
    <MainWrapper>
      <InputWrapper>
        <PersonalInput
          setName={setName}
          setTitle={setTitle}
          setPhone={setPhone}
          setEmail={setEmail}
          setAddress={setAddress}
          setDescription={setDescription}
        />

        <EducationInput />
        <ExperienceInput />
      </InputWrapper>

      <PreviewWrapper>
        <PersonalPreview
          name={name}
          title={title}
          phone={phone}
          email={email}
          address={address}
          description={description}
        />

        <EducationPreview />
        <ExperiencePreview />
      </PreviewWrapper>
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

const PreviewWrapper = styled.div`
  background-color: #f8f8f8;
  width: 800px;
  margin: 50px 25px 50px 25px;
  padding: 1rem;
`;

export default Main;
