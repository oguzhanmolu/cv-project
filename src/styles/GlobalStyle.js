import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  font-family: 'Montserrat', sans-serif;

}

.Section__Title{
  font-size: 2rem;
  font-weight: bold;
  margin: 25px 0 10px 0;
}

section>*{
  font-size: 1.5rem;
}

.Section__Wrapper{
  display: flex;
  flex-direction: column;
  text-align: center;
}

input, textarea{
  padding: 5px;
  margin-top: 5px;
}


`;

export default GlobalStyle;
