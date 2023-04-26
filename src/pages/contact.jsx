import Head from 'next/head'
import React from 'react'

const Form = React.lazy(() => import('@/modules/contact/form/Form'))

const contact = () => {
  return (
    <>
      <Head>
        <title>Atalaso | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form />
      </main>
    </>
  )
}

export default contact