import React, { useState } from 'react';
import styled from 'styled-components';
import PersonalInput from './CVForm/PersonalInput';
import EducationInput from './CVForm/EducationInput';
import ExperienceInput from './CVForm/ExperienceInput';
import PersonalPreview from './CVPreview/PersonalPreview';
import EducationPreview from './CVPreview/EducationPreview';
import ExperiencePreview from './CVPreview/ExperiencePreview';

const Main = () => {
  const [name, setName] = useState('John Smith');
  const [title, setTitle] = useState('React Developer');
  const [phone, setPhone] = useState('+(44) 1234-9999');
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [address, setAddress] = useState('London, UK');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'
  );

  const [university, setUniversity] = useState('University of London');
  const [program, setProgram] = useState('Computer Science');
  const [uniEntrance, setUniEntrance] = useState('2015');
  const [uniGraduation, setUniGraduation] = useState('2019');
  const [uniNotes, setUniNotes] = useState(
    'I had a minor gap in 2018 semester.'
  );

  const [companyPosition, setCompanyPosition] = useState('Software Developer');
  const [companyName, setCompanyName] = useState('Future Labs');
  const [companyLocation, setCompanyLocation] = useState('London');
  const [companyEntrance, setCompanyEntrance] = useState('2019');
  const [companyLeft, setCompanyLeft] = useState('2022');
  const [companyNotes, setCompanyNotes] = useState(
    'I mainly handled hooks and API'
  );

  const setInputState = (event, setStateFunction) =>
    setStateFunction(event.target.value);

  return (
    <MainWrapper>
      <InputWrapper>
        <PersonalInput
          setInputState={setInputState}
          setName={setName}
          setTitle={setTitle}
          setPhone={setPhone}
          setEmail={setEmail}
          setAddress={setAddress}
          setDescription={setDescription}
        />

        <EducationInput
          setInputState={setInputState}
          setProgram={setProgram}
          setUniversity={setUniversity}
          setUniEntrance={setUniEntrance}
          setUniGraduation={setUniGraduation}
          setUniNotes={setUniNotes}
        />

        <ExperienceInput
          setInputState={setInputState}
          setCompanyPosition={setCompanyPosition}
          setCompanyName={setCompanyName}
          setCompanyLocation={setCompanyLocation}
          setCompanyEntrance={setCompanyEntrance}
          setCompanyLeft={setCompanyLeft}
          setCompanyNotes={setCompanyNotes}
        />
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

        <EducationPreview
          program={program}
          university={university}
          uniEntrance={uniEntrance}
          uniGraduation={uniGraduation}
          uniNotes={uniNotes}
        />

        <ExperiencePreview
          companyPosition={companyPosition}
          companyName={companyName}
          companyLocation={companyLocation}
          companyEntrance={companyEntrance}
          companyLeft={companyLeft}
          companyNotes={companyNotes}
        />
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
