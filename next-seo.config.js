const title = `Atalaso helps business overcome challenges through technological solutions, focusing on solving problems with an innovative approach, and improving business tech capabilities.`

export default {
  themeColor: '#2596BE',
  title: `Atalaso | Creative software development and marketing solutions`,
  description: title,

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.atalaso.com/',
    siteName: 'Atalaso',
    title: `Atalaso, Powering your growth`,
    description: title,
    images: [
      {
        url: 'https://www.atalaso.com/social/atalaso-share-preview.jpg',
        width: 1024,
        height: 630,
        alt: 'Atalaso',
      },
    ],
  },
  // twitter: {
  //   handle: '@atalaso_ofc',
  //   site: '@atalaso_ofc',
  //   creator: '@atalaso_ofc',
  //   cardType: 'summary_large_image',
  // },
  additionalLinkTags: [
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}
