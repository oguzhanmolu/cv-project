import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

const CVPreview = ({ cv }) => {
  return (
    <>
      <PersonalPreview personalInfo={cv.personalInfo} />
      <EducationPreview educationInfo={cv.education} />
      <ExperiencePreview experienceInfo={cv.experience} />
    </>
  );
};

export default CVPreview;
