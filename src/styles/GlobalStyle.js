import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    height: 100vh;
    max-height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;