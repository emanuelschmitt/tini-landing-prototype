import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:300,400,800i&display=swap');

  body {
    min-height: 100vh;
    margin: 0;
  }

  html {
    font-family: 'Be Vietnam', sans-serif;
  }

  h1, h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
    margin-top: 0;
  }

  a {
    /* text-decoration: none; */
    color: currentColor;
  }
`;

export default GlobalStyles;
