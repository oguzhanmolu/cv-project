import EducationItem from './EducationItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

const EducationInput = ({ educationInfo, onChangeEducation, onAdd }) => {
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      educationItem={educationItem}
      key={educationItem.id}
      id={educationItem.id}
      onChangeAction={onChangeEducation}
    ></EducationItem>
  ));

  return (
    <Section title='Education'>
      {educationItems}
      <Button text='Add' onClickAction={onAdd} />
    </Section>
  );
};

export default EducationInput;
