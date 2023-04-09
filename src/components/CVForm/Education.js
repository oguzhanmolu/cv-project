import EducationItem from './EducationItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

// Education input section
const EducationInput = ({
  educationInfo,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
  // Create education items from each cv.education item
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      educationItem={educationItem}
      key={educationItem.id}
      id={educationItem.id}
      onChangeAction={onChangeEducation}
      onDeleteEducation={onDeleteEducation}
    ></EducationItem>
  ));

  return (
    // Section
    <Section title='Education'>
      {/* Children */}
      {educationItems}

      {/* Add new education inputs */}
      <Button
        text='Add Education'
        onClickAction={onAddEducation}
        color={'rgb(56,144,206)'}
      />
    </Section>
  );
};

export default EducationInput;
