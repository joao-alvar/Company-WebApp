import {NextSeo} from 'next-seo'

import ContactForm from '@/modules/contact/form/ContactForm'

const contact = () => {
  const titleTag = `We're here to help | Atalaso`
  const descriptionTag = `Contact our experienced team at Atalaso for any inquiries, support, or assistance. We are here to provide prompt and reliable support for all your needs.`
  const keywordsTag =
    'Atalaso contact, get in touch, assistance, support, inquiries, questions, solutions'
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
        <ContactForm />
      </main>
    </>
  )
}

export default contact
