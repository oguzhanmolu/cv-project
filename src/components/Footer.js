import styled from 'styled-components';

// Simple footer with github icon and link to my github page
const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <FooterIcon className='fa-brands fa-github fa-flip'></FooterIcon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterIcon = styled.i`
  padding: 10px;
  font-size: 3rem;
  animation-duration: 10s;
  color: rgb(40, 40, 40);
  cursor: pointer;
`;

export default Footer;
