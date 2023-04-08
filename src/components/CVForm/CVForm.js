import styled from 'styled-components';
import PersonalInput from './Personal';
import EducationInput from './Education';
import ExperienceInput from './Experience';
import Button from '../Utils/Button';

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onLoadExampleCV,
}) => {
  return (
    <InputWrapper>
      <PersonalInput
        personalInfo={cv.personalInfo}
        onChangePersonal={onChangePersonal}
      />
      <EducationInput
        educationInfo={cv.education}
        onChangeEducation={onChangeEducation}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      />
      <ExperienceInput
        experienceInfo={cv.experience}
        onChangeExperience={onChangeExperience}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
      />
      <ButtonWrapper>
        <Button
          text='Load Example CV'
          color='green'
          onClickAction={onLoadExampleCV}
        />
        <Button text='Generate PDF' color='#8B0000' />
      </ButtonWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export default CVForm;
