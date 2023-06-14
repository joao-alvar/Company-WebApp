import {NextSeo} from 'next-seo'

import PageNotFound from '@/modules/pageNotFound/PageNotFound'

const NotFoundPage = () => {
  return (
    <>
      <NextSeo
        title="Page Not Found"
        description="404"
        nofollow={true}
        noindex={true}
        canonical="https://www.atalaso.com/404"
        openGraph={{
          url: 'https://www.atalaso.com/404',
        }}
      />
      <main role="main">
        <PageNotFound />
      </main>
    </>
  )
}

export default NotFoundPage
