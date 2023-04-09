import styled from 'styled-components';
import PreviewTitle from '../Utils/PreviewTitle';

// Personal preview contents
const PersonalPreview = ({ personalInfo }) => {
  return (
    <>
      <PersonalWrapper>
        <Photo src={personalInfo.photo} />
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

const Photo = styled.img`
  height: 240px;
  width: 180px;
  margin-bottom: 25px;
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
