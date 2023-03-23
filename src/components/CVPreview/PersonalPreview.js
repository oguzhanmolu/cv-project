import styled from 'styled-components';
import placeholderImg from '/home/oguzhanmolu/repos/cv-project/src/assets/portrait-placeholder.png';

const PersonalPreview = ({
  name,
  title,
  phone,
  email,
  address,
  description,
}) => {
  return (
    <PersonalWrapper>
      <PortraitPlaceholder src={placeholderImg} />
      <NameTitleGroup>
        <NamePreview>{name}</NamePreview>
        <span>{title}</span>
      </NameTitleGroup>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{address}</h1>
      <h1>{description}</h1>
    </PersonalWrapper>
  );
};

const PortraitPlaceholder = styled.img`
  height: 150px;
  margin-bottom: 25px;
`;

const PersonalWrapper = styled.div`
  display: flex;
  border-bottom: 5px solid #81aebb;
`;

const NameTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 2.25rem;
`;

const NamePreview = styled.span`
  font-size: 3rem;
`;

export default PersonalPreview;
