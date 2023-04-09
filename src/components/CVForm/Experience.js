import ExperienceItem from './ExperienceItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

// Experience input section
const ExperienceInput = ({
  experienceInfo,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
}) => {
  // Create experience items from each cv.experience item
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
    // Section
    <Section title='Experience'>
      {/* Children */}
      {experienceItems}

      {/* Add new experience inputs */}
      <Button
        text='Add Experience'
        onClickAction={onAddExperience}
        color={'rgb(56,144,206)'}
      />
    </Section>
  );
};

export default ExperienceInput;
