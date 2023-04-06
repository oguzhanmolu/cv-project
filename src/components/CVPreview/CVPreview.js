import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

const CVPreview = ({ CV }) => {
  return <PersonalPreview personalInfo={CV.personalInfo} />;
};

export default CVPreview;
