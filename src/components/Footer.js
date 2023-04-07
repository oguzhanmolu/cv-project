import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <FooterIcon className='fa-brands fa-github fa-flip'></FooterIcon>
      </a>
    </FooterWrapper>
  );
};

export default Footer;

const FooterIcon = styled.i`
  padding: 10px;
  font-size: 3rem;
  animation-duration: 10s;
  color: rgb(40, 40, 40);
  cursor: pointer;
`;

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
