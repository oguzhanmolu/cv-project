import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

// CVPreview component which renders the right contents
const CVPreview = ({ cv }) => {
  return (
    <>
      {/* Personal preview contents */}
      <PersonalPreview personalInfo={cv.personalInfo} />

      {/* Education preview contents */}
      <EducationPreview educationInfo={cv.education} />

      {/* Experience preview contents */}
      <ExperiencePreview experienceInfo={cv.experience} />
    </>
  );
};

export default CVPreview;
