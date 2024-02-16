import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#e66769',
  lightPink: '#fcedf3',
  backgroundWhite: '#fcf7fc',
  white: 'white'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.backgroundWhite};
    color: ${colors.darkPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
