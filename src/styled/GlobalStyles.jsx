import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0;
    background-color:  #171133;
}
h1{
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  color: #fff;
  }
p{
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  }

`;


export default GlobalStyle;