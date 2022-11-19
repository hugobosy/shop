import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;