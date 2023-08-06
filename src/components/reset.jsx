import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #4D4F62;
        font-family: 'Poppins', sans-serif;
    }

    html {
        font-size: 62.5%;
    }
`

export default GlobalStyle