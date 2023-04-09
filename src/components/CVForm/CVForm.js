import PersonalInput from './Personal';
import EducationInput from './Education';
import ExperienceInput from './Experience';
import styled from 'styled-components';
import Button from '../Utils/Button';

// CVForm component which renders the left inputs
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
  onResetInputs,
}) => {
  return (
    <InputWrapper>
      {/* Personal Input Section */}
      <PersonalInput
        personalInfo={cv.personalInfo}
        onChangePersonal={onChangePersonal}
      />
      {/* Education Input Section */}
      <EducationInput
        educationInfo={cv.education}
        onChangeEducation={onChangeEducation}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      />
      {/* Experience Input Section */}
      <ExperienceInput
        experienceInfo={cv.experience}
        onChangeExperience={onChangeExperience}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
      />

      {/* Load Example Button */}
      <ButtonWrapper>
        <Button
          text='Load Example CV'
          color='rgb(222, 49, 99)'
          onClickAction={onLoadExampleCV}
        />

        {/* Reset Button */}
        <Button
          text='Reset'
          color='rgb(56,144,206)'
          onClickAction={onResetInputs}
        />
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
