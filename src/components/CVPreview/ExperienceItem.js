import styled from 'styled-components';

const ExperienceItem = ({ experienceItem }) => {
  return (
    <>
      <EducationWrapper>
        <h3>
          {experienceItem.from}-{experienceItem.to}
        </h3>
        <h3>{experienceItem.position}</h3>
        <p>
          {experienceItem.company}, {experienceItem.city}
        </p>
      </EducationWrapper>
    </>
  );
};

const EducationWrapper = styled.div`
  margin: 10px 0 0 25px;
  font-size: 1.15rem;
`;

export default ExperienceItem;
