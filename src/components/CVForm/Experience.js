import ExperienceItem from './ExperienceItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

const ExperienceInput = ({
  experienceInfo,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
}) => {
  const experienceItems = experienceInfo.map((experienceItem) => (
    <ExperienceItem
      experienceItem={experienceItem}
      key={experienceItem.id}
      id={experienceItem.id}
      onChangeAction={onChangeExperience}
      onDeleteExperience={onDeleteExperience}
    />
  ));
  return (
    <Section title='Experience'>
      {experienceItems}
      <Button text='Add' onClickAction={onAddExperience} />
    </Section>
  );
};

export default ExperienceInput;
