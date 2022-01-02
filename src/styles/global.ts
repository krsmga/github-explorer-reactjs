import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --hue: 43;
    --background: hsl(var(--hue), 0%, 6%);
    --gold: hsl(var(--hue), 90%, 60%);
    --gold-dark: hsl(var(--hue), 85%, 39%);
    --gold-light: hsl(var(--hue), 90%, 80%);
    --gold-black: hsl(var(--hue), 90%, 20%);
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
    background: var(--background);
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
`