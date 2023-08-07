import {NextSeo} from 'next-seo'

import CloudCallToAction from '@/modules/cloud/cloudCallToAction/CloudCallToAction'
import CloudCards from '@/modules/cloud/cloudCards/CloudCards'
import CloudCarousel from '@/modules/cloud/cloudCarousel/CloudCarousel'
import CloudFeatures from '@/modules/cloud/cloudFeatures/CloudFeatures'
import CloudGrid from '@/modules/cloud/cloudGrid/CloudGrid'
import HeroCloud from '@/modules/cloud/heroCloud/HeroCloud'

const cloud = () => {
  const titleTag = `Cloud services & solutions | Atalaso`
  const descriptionTag = `Atalaso accelerates your business growth with scalable and customized cloud services and solutions. Power your digital transformation journey and efficiently embrace innovation.`
  const keywordsTag =
    'Atalaso cloud services, cloud solutions, what are cloud services, Cloud security, Cloud storage, Scalable cloud, Cloud-based applications, cloud consulting, types of cloud services, cloud capabilities'
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
        <HeroCloud />
        <CloudGrid />
        <CloudFeatures />
        <CloudCarousel />
        <CloudCards />
        <CloudCallToAction />
      </main>
    </>
  )
}

export default cloud
