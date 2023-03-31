import {ThemeProvider} from 'styled-components'

import '../styles/fonts.css'
import {GlobalStyles} from '../styles/Global'
import {theme} from '../styles/Theme'

const App = ({Component, pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
