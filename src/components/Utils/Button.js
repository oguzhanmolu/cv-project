import styled from 'styled-components';

// Button component with text,onclick and color props
const Button = ({ text, onClickAction, color }) => {
  return (
    <ButtonElement style={{ background: color }} onClick={onClickAction}>
      {text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  min-width: 200px;
  padding: 10px;
  margin: 10px 0 10px 0;
  color: white;
  font-size: 1.25rem;
`;

export default Button;
