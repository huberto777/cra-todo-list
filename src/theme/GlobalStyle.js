import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

  *, *::before, *::after{
      box-sizing: border-box;
      /* css font antialliasing */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  /* happy REM, czyli 1rem = 10px */
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }
  .inactive {
    filter: blur(2px) grayscale(1)
  }
`;

export default GlobalStyle;
