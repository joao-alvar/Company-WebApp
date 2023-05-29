import BoxCards from '@/modules/seo/boxCards/BoxCards'
import GridSeo from '@/modules/seo/gridSeo/GridSeo'
import HeroSeo from '@/modules/seo/heroSeo/HeroSeo'
import SeoBenefits from '@/modules/seo/seoBenefits/SeoBenefits'
import SeoCallToAction from '@/modules/seo/seoCallToAction/SeoCallToAction'
import SeoFeatures from '@/modules/seo/seoFeatures/SeoFeatures'
import SeoStrategy from '@/modules/seo/seoStrategy/SeoStrategy'

const seo = () => {
  return (
    <main role="main">
      <HeroSeo />
      <BoxCards />
      <GridSeo />
      <SeoFeatures />
      <SeoStrategy />
      <SeoBenefits />
      <SeoCallToAction />
    </main>
  )
}

export default seo
