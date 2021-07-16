import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AlurakutStyles} from '../src/lib/AlurakutCommuns'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  

body {
    font-family: sans-serif;
    background-image: url('https://i.pinimg.com/originals/d0/4e/b7/d04eb7e5e36bf01e8d663538e335016e.jpg');
  }


#__next{
  display: flex;
  min-height: 100vh;
  flex-direction: column;

}

img{
  max-width: 100%;
  height: auto;
  display: block;
}

${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
