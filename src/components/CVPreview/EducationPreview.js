import EducationItem from './EducationItem';
import PreviewTitle from '../Utils/PreviewTitle';

//
const EducationPreview = ({ educationInfo }) => {
  // Create education preview items from each cv.education item
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
    />
  ));
  return (
    <>
      {/* Section Title */}
      <PreviewTitle title='Education' />

      {/* Children */}
      {educationItems}
    </>
  );
};

export default EducationPreview;
