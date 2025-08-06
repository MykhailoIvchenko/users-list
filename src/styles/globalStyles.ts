import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*
    Based on https://github.com/hankchizljaw/modern-css-reset
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  #root {
    isolation: isolate;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
