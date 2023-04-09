import PreviewTitle from '../Utils/PreviewTitle';
import ExperienceItem from './ExperienceItem';

const ExperiencePreview = ({ experienceInfo }) => {
  // Create experience preview items from each cv.experience item
  const experienceItems = experienceInfo.map((experienceItem) => {
    return (
      <ExperienceItem experienceItem={experienceItem} key={experienceItem.id} />
    );
  });
  return (
    <>
      {/* Section Title */}
      <PreviewTitle title='Experience' />

      {/* Children */}
      {experienceItems}
    </>
  );
};

export default ExperiencePreview;
