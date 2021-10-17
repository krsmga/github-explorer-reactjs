import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --hue: 43;
    --header-color: hsl(var(--hue), 85%, 39%);
    --input-color: hsl(var(--hue), 85%, 65%);
    --input-text-color: hsl(var(--hue), 12%, 15%);
    --input-placeholder-color: hsl(var(--hue), 85%, 39%);
    --button-color: hsl(var(--hue), 85%, 18%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font: 16px 'Poppins', sans-serif;
    color: #121214;
    background: rgb(68, 68, 68);
    -webkit-font-smoothing: antialiased;  
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`