import styled from 'styled-components';
import placeholderImg from '/home/oguzhanmolu/repos/cv-project/src/assets/portrait-placeholder.jpg';

const PersonalPreview = ({ personalInfo }) => {
  return (
    <>
      <PersonalWrapper>
        <PortraitPlaceholder src={placeholderImg} />
        <NameTitleGroup>
          <Name>{personalInfo.name}</Name>
          <h2>{personalInfo.title}</h2>
        </NameTitleGroup>

        <DetailsGroup>
          <IconGroup>
            <i className='fa-solid fa-phone'></i>
            <span>{personalInfo.phone}</span>
          </IconGroup>

          <IconGroup>
            <i className='fa-solid fa-envelope'></i>
            <span>{personalInfo.email}</span>
          </IconGroup>

          <IconGroup>
            <i className='fa-solid fa-location-dot'></i>
            <span>{personalInfo.address}</span>
          </IconGroup>
        </DetailsGroup>
      </PersonalWrapper>

      <div>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText>{personalInfo.description}</DescriptionText>
      </div>
    </>
  );
};

const PersonalWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  border-bottom: 5px solid #81aebb;
`;

const PortraitPlaceholder = styled.img`
  height: 175px;
  width: 125px;
  margin-bottom: 25px;
`;

const Name = styled.h1`
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 3rem;
  color: #195c70;
`;

const NameTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 10px;
  max-width: 500px;
  font-size: 1.5rem;
`;

const DetailsGroup = styled.div`
  margin: 25px 0 auto auto;
  font-size: 1.25rem;
  font-weight: bold;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DescriptionTitle = styled.span`
  display: inline-block;
  margin-top: 20px;
  padding: 5px;
  color: #195c70;
  border-bottom: 5px solid #81aebb;
  font-size: 1.75rem;
  font-weight: bold;
`;

const DescriptionText = styled.p`
  margin-top: 10px;
  font-size: 1.25rem;
`;

export default PersonalPreview;
