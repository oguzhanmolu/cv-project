import styled from 'styled-components';
const Button = ({ text, onClickAction }) => {
  return <ButtonElement onClick={onClickAction}>{text}</ButtonElement>;
};

const ButtonElement = styled.button`
  padding: 10px;
  margin: 10px 0 5px 0;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 1.25rem;
`;

export default Button;
