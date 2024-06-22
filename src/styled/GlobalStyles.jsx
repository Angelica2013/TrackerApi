import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    margin: 0%;
    padding: 0%;
}
h1{
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  color: #fff;
  }
p{
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  }

`;


export default GlobalStyle;