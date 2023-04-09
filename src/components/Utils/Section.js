import styled from 'styled-components';

// Section with title and children props
const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SectionTitle = styled.span`
  margin-bottom: 5px;
  font-size: 2rem;
`;

export default Section;
