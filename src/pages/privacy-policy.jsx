import {NextSeo} from 'next-seo'

import PrivacyPolicy from '@/modules/privacyPolicy/PrivacyPolicy'

const privacyPolicy = () => {
  const titleTag = 'Privacy Policy | Atalaso'
  const descriptionTag = `Atalaso's privacy policy outlines how we safeguard your personal information and ensure its confidentiality. Learn about the data we collect, how we use it, and your rights as a user.`
  const keywordsTag =
    'client data protection, Atalaso privacy policy, personal information protection, data privacy, user rights, data collection, data usage, confidentiality'
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
        <PrivacyPolicy />
      </main>
    </>
  )
}

export default privacyPolicy
