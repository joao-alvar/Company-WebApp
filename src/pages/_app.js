import React, {Suspense} from 'react'

import Footer from '@/components/footer/Footer'
import PageLoader from '@/components/loading/pageLoader/PageLoader'
import Navbar from '@/components/navbar/Navbar'
import {ThemeProvider} from 'styled-components'

// import Fonts from '@/styles/Fonts'
import {GlobalStyles} from '@/styles/Global'
import {theme} from '@/styles/Theme'

const App = ({Component, pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<PageLoader />}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
