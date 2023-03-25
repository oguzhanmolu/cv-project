import styled from 'styled-components';

const EducationPreview = ({
  university,
  program,
  uniEntrance,
  uniGraduation,
  uniNotes,
}) => {
  return (
    <>
      <EducationTitle>Education</EducationTitle>
      <EducationGroup>
        <BoldText>
          <span>{uniEntrance}</span>-<span>{uniGraduation}</span>
        </BoldText>
        <NormalText>
          <span>{program}</span>, <span>{university}</span>
        </NormalText>
        <span>Note: {uniNotes}</span>
      </EducationGroup>
    </>
  );
};

const EducationTitle = styled.span`
  display: inline-block;
  margin-top: 20px;
  padding: 5px;
  color: #195c70;
  border-bottom: 5px solid #81aebb;
  font-size: 2rem;
  font-weight: bold;
`;

const EducationGroup = styled.div`
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

export default EducationPreview;
