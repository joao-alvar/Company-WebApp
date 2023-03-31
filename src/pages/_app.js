import React, {Fragment, Suspense} from 'react'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import {ThemeProvider} from 'styled-components'

import '../styles/fonts.css'
import {GlobalStyles} from '../styles/Global'
import {theme} from '../styles/Theme'

const App = ({Component, pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
