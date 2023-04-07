import EducationItem from './EducationItem';
import PreviewTitle from '../Utils/PreviewTitle';

const EducationPreview = ({ educationInfo }) => {
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
    />
  ));
  return (
    <>
      <PreviewTitle title='Education' />
      {educationItems}
    </>
  );
};

export default EducationPreview;
