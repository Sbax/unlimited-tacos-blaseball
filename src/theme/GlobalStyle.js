import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily, theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: ${fontFamily.sans}, serif;
    color: ${theme.offWhite};
    background: ${theme.primary}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.accent};
    text-decoration: none;
    font-weight: bold;

    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .75;
    }
  }
`;

export default GlobalStyle;
