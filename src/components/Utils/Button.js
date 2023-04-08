import styled from 'styled-components';
const Button = ({ text, onClickAction, color }) => {
  return (
    <ButtonElement style={{ background: color }} onClick={onClickAction}>
      {text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  padding: 10px;
  margin: 10px 0 5px 0;
  color: white;
  font-size: 1.25rem;
`;

export default Button;
