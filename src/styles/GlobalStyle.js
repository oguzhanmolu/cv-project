import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  font-family: 'Montserrat', sans-serif;

}
#First__Section__Title{
  margin-bottom: 5px;
  font-size: 2rem;
  font-weight: bold;
}

.Section__Title{
  margin: 30px 0 5px 0;
  font-size: 2rem;
  font-weight: bold;
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
