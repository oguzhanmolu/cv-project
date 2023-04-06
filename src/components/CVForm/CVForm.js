import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <>
      <PersonalInput
        personalInfo={cv.personalInfo}
        onChangePersonal={onChangePersonal}
      />
    </>
  );
};

export default CVForm;
