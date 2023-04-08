import EducationItem from './EducationItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

const EducationInput = ({
  educationInfo,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
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
    <Section title='Education'>
      {educationItems}
      <Button text='Add' onClickAction={onAddEducation} />
    </Section>
  );
};

export default EducationInput;
