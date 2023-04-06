import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

const CVPreview = ({ cv }) => {
  return <PersonalPreview personalInfo={cv.personalInfo} />;
};

export default CVPreview;
