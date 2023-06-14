import {NextSeo} from 'next-seo'

import TermsOfUse from '@/modules/termsOfUse/TermsOfUse'

const privacyPolicy = () => {
  const titleTag = 'Terms & Conditions | Atalaso'
  const descriptionTag = `Read Atalaso's comprehensive terms and conditions to understand the legal guidelines for using our services. Stay informed and protect your rights with our transparent and user-friendly terms.`
  const keywordsTag =
    'Atalaso terms and conditions, legal guidelines, user agreement, service terms, privacy policy, terms of use, website policies'
  return (
    <>
      <NextSeo
        title={titleTag}
        description={descriptionTag}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywordsTag,
          },
        ]}
      />
      <main role="main">
        <TermsOfUse />
      </main>
    </>
  )
}

export default privacyPolicy
