import styled from 'styled-components';

const ExperiencePreview = ({
  companyPosition,
  companyName,
  companyLocation,
  companyEntrance,
  companyLeft,
  companyNotes,
}) => {
  return (
    <>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceGroup>
        <BoldText>
          <span>{companyEntrance}</span>-<span>{companyLeft}</span>
        </BoldText>
        <NormalText>
          <span>{companyPosition}</span> at <span>{companyName}</span>,{' '}
          <span>{companyLocation}</span>
        </NormalText>
        <span>Note: {companyNotes}</span>
      </ExperienceGroup>
    </>
  );
};

const ExperienceTitle = styled.span`
  display: inline-block;
  margin-top: 20px;
  padding: 5px;
  color: #195c70;
  border-bottom: 5px solid #81aebb;
  font-size: 2rem;
  font-weight: bold;
`;

const ExperienceGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 5px;
  font-size: 1.15rem;
`;
const BoldText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 5px;
`;
const NormalText = styled.div`
  font-size: 1.25rem;
`;

export default ExperiencePreview;
