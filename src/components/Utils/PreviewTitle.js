import styled from 'styled-components';

// CVPreview Title
const PreviewTitle = ({ title }) => {
  return <TitleElement>{title}</TitleElement>;
};

const TitleElement = styled.span`
  display: inline-flex;
  margin-top: 25px;
  padding: 5px;
  color: #195c70;
  border-bottom: 5px solid #81aebb;
  font-size: 1.75rem;
  font-weight: bold;
`;

export default PreviewTitle;
