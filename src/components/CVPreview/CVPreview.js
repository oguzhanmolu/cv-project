import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import styled from 'styled-components';

const CVPreview = ({ cv }) => {
  return (
    <PreviewWrapper>
      <PersonalPreview personalInfo={cv.personalInfo} />
      <EducationPreview educationInfo={cv.education} />
      <ExperiencePreview experienceInfo={cv.experience} />
    </PreviewWrapper>
  );
};

const PreviewWrapper = styled.div`
  flex-direction: column;
`;

export default CVPreview;
