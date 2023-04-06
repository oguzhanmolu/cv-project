import { Children } from 'react';
import styled from 'styled-components';

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
  font-weight: bold;
`;

export default Section;
