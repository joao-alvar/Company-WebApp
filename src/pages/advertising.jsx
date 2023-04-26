import Head from 'next/head'
import React from 'react'

const HeroAds = React.lazy(() =>
  import('@/modules/advertising/heroAds/HeroAds')
)

const AdsLead = React.lazy(() =>
  import('@/modules/advertising/adsLead/AdsLead')
)

const AdsWall = React.lazy(() =>
  import('@/modules/advertising/adsWall/AdsWall')
)

const AdsFeatures = React.lazy(() =>
  import('@/modules/advertising/adsFeatures/AdsFeatures')
)

const AdsList = React.lazy(() =>
  import('@/modules/advertising/adsList/AdsList')
)

const AdsBanner = React.lazy(() =>
  import('@/modules/advertising/adsBanner/AdsBanner')
)

const AdsBenefits = React.lazy(() =>
  import('@/modules/advertising/adsBenefits/AdsBenefits')
)

const AdsQuote = React.lazy(() =>
  import('@/modules/advertising/adsQuote/AdsQuote')
)

const advertising = () => {
  return (
    <>
      <Head>
        <title>Atalaso | Advertising solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroAds />
        <AdsBanner />
        <AdsBenefits />
        <AdsLead />
        <AdsFeatures />
        <AdsWall />
        <AdsList />
        <AdsQuote />
      </main>
    </>
  )
}

export default advertising