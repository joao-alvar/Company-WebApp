import {DefaultSeo} from 'next-seo'
import {NextSeo} from 'next-seo'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Suspense} from 'react'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import PageLoader from '@/components/loading/pageLoader/PageLoader'
import StructuredData from '@/components/structuredData/StructuredData'
import {ThemeProvider} from 'styled-components'

import SEO from '../../next-seo.config'

import {GlobalStyles} from '@/styles/Global'
import {theme} from '@/styles/Theme'

const App = ({Component, pageProps}) => {
  const router = useRouter()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Atalaso',
    url: 'https://www.atalaso.com',
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <meta name="robots" content="index,follow" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextSeo
        canonical={`https://www.atalaso.com${router.pathname}`}
        themeColor="#f3f4f5"
        openGraph={{
          url: `https://www.atalaso.com${router.pathname}`,
        }}
      />
      <StructuredData data={structuredData} />
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
