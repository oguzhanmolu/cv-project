import styled from 'styled-components';
import PersonalInput from './Personal';
import EducationInput from './Education';
import ExperienceInput from './Experience';

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default CVForm;
