import styled from 'styled-components';
import PreviewTitle from '../Utils/PreviewTitle';
import ExperienceItem from './ExperienceItem';

const ExperiencePreview = ({ experienceInfo }) => {
  const experienceItems = experienceInfo.map((experienceItem) => {
    return (
      <ExperienceItem experienceItem={experienceItem} key={experienceItem.id} />
    );
  });
  return (
    <>
      <PreviewTitle title='Experience' />
      {experienceItems}
    </>
  );
};

export default ExperiencePreview;
