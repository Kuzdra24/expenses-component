import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    text-decoration:none;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;