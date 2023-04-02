import Head from 'next/head'
import React from 'react'

const Featured = React.lazy(() => import('@/modules/home/featured/Featured'))

const Hero = React.lazy(() => import('@/modules/home/hero/Hero'))

const Lead = React.lazy(() => import('@/modules/home/lead/Lead'))

const LeadWall = React.lazy(() => import('@/modules/home/leadWall/LeadWall'))

const LeadCard = React.lazy(() => import('@/modules/home/leadCard/LeadCard'))

const LeadFeature = React.lazy(() =>
  import('@/modules/home/LeadFeature/LeadFeature')
)

const LeadContact = React.lazy(() =>
  import('@/modules/home/leadContact/LeadContact')
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Atalaso | Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Hero />
          <Lead />
          <LeadCard />
          <LeadWall />
          <Featured />
          <LeadFeature />
          <LeadContact />
        </div>
      </main>
    </>
  )
}
