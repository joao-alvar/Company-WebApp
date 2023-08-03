import {NextSeo} from 'next-seo'

import CloudCallToAction from '@/modules/cloud/cloudCallToAction/CloudCallToAction'
import CloudCards from '@/modules/cloud/cloudCards/CloudCards'
import CloudCarousel from '@/modules/cloud/cloudCarousel/CloudCarousel'
import CloudFeatures from '@/modules/cloud/cloudFeatures/CloudFeatures'
import CloudGrid from '@/modules/cloud/cloudGrid/CloudGrid'
import HeroCloud from '@/modules/cloud/heroCloud/HeroCloud'

const seo = () => {
  const titleTag = `SEO solutions | Enhance your SEO Performance with Effective Strategies | Atalaso`
  const descriptionTag = `Atalaso improves your website's search engine rankings and visibility with proven SEO strategies. Our expert team will help you optimize your site, increase organic traffic, and achieve higher conversions.`
  const keywordsTag =
    'Atalaso SEO strategies, search engine optimization, organic traffic, higher rankings, website visibility, conversion optimization'
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

export default seo
