import styled from 'styled-components';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <FormWrapper>
      <PersonalInput
        personalInfo={cv.personalInfo}
        onChangePersonal={onChangePersonal}
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
