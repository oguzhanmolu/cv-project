import styled from 'styled-components';
import placeholderImg from '/home/oguzhanmolu/repos/cv-project/src/assets/portrait-placeholder.jpg';
import PreviewTitle from '../Utils/PreviewTitle';

const PersonalPreview = ({ personalInfo }) => {
  return (
    <>
      <PersonalWrapper>
        <PortraitPlaceholder src={placeholderImg} />
        <div>
          <NameText>{personalInfo.name}</NameText>
          <h2>{personalInfo.title}</h2>
        </div>

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

      <>
        <PreviewTitle title='Description' />
        <DescriptionText>{personalInfo.description}</DescriptionText>
      </>
    </>
  );
};

const PersonalWrapper = styled.div`
  display: flex;
  gap: 15px;
  border-bottom: 5px solid #81aebb;
`;

const PortraitPlaceholder = styled.img`
  height: 175px;
  width: 125px;
  margin-bottom: 25px;
  border: 5px solid #81aebb;
  background-color: #81aebb;
`;

const NameText = styled.h2`
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 2.5rem;
  color: #195c70;
`;

const DetailsGroup = styled.div`
  margin: 0 0 auto auto;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  font-weight: bold;
`;

const DescriptionText = styled.p`
  margin-top: 10px;
  font-size: 1.25rem;
`;

export default PersonalPreview;
