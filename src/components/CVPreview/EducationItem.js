import styled from 'styled-components';

const EducationItem = ({ educationItem }) => {
  return (
    <>
      <EducationWrapper>
        <h3>
          {educationItem.from}-{educationItem.to}
        </h3>
        <div>
          <h3>
            {educationItem.uniName}, {educationItem.city}
          </h3>
          <p>Degree: {educationItem.degree}</p>
          <p>Subject: {educationItem.subject}</p>
        </div>
      </EducationWrapper>
    </>
  );
};

const EducationWrapper = styled.div`
  display: flex;
  margin: 10px 0 0 25px;
  gap: 25px;
  font-size: 1.15rem;
`;

export default EducationItem;
