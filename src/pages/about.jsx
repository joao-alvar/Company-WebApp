import Head from 'next/head'
import React from 'react'

const AboutModules = React.lazy(() => import('@/modules/about/AboutModules'))

const About = () => {
  return (
    <>
      <Head>
        <title>Atalaso | About page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutModules />
    </>
  )
}

export default About