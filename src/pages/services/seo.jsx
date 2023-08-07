import {NextSeo} from 'next-seo'

import BoxCards from '@/modules/seo/boxCards/BoxCards'
import GridSeo from '@/modules/seo/gridSeo/GridSeo'
import HeroSeo from '@/modules/seo/heroSeo/HeroSeo'
import SeoBenefits from '@/modules/seo/seoBenefits/SeoBenefits'
import SeoCallToAction from '@/modules/seo/seoCallToAction/SeoCallToAction'
import SeoFeatures from '@/modules/seo/seoFeatures/SeoFeatures'
import SeoStrategy from '@/modules/seo/seoStrategy/SeoStrategy'

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
        <HeroSeo />
        <BoxCards />
        <GridSeo />
        <SeoFeatures />
        <SeoStrategy />
        <SeoBenefits />
        <SeoCallToAction />
      </main>
    </>
  )
}

export default seo
