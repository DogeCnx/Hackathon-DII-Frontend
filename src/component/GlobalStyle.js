import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-family: 'Mitr', sans-serif;
    font-size: 20px;
    list-style: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
`
export default GlobalStyle
