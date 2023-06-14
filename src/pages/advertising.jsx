import {NextSeo} from 'next-seo'

import Accordion from '@/modules/advertising/accordion/Accordion'
import AdsBenefits from '@/modules/advertising/adsBenefits/AdsBenefits'
import AdsCallToAction from '@/modules/advertising/adsCallToAction/AdsCallToAction'
import AdsFeatures from '@/modules/advertising/adsFeatures/AdsFeatures'
import AdsLead from '@/modules/advertising/adsLead/AdsLead'
import AdsOverview from '@/modules/advertising/adsOverview/AdsOverview'
import AdsWall from '@/modules/advertising/adsWall/AdsWall'
import HeroAds from '@/modules/advertising/heroAds/HeroAds'

const advertising = () => {
  const titleTag =
    'Digital marketing solutions | Enhance your online presence | Atalaso'
  const descriptionTag =
    'Atalaso drives your business growth with our comprehensive digital marketing services. We specialize in SEO, PPC advertising, social media marketing, and more. Maximize your online presence and reach your target audience.'
  const keywordsTag =
    'digital marketing, Atalaso, online advertising, SEO, PPC, social media marketing, digital strategy, content marketing, search engine optimization, online marketing, web analytics'

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
        <HeroAds />
        <AdsOverview />
        <AdsBenefits />
        <AdsFeatures />
        <AdsWall />
        <AdsLead />
        <Accordion />
        <AdsCallToAction />
      </main>
    </>
  )
}

export default advertising
