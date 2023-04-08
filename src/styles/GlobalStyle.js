import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  font-family: 'Montserrat', sans-serif;

}
input, textarea{
  font-size: 1.5rem;
  padding: 5px;
  margin-top: 5px;
}
button{
  cursor: pointer;
  border-style: none;
}

h2{font-size:1.75rem}
`;

export default GlobalStyle;
