import {NextSeo} from 'next-seo'

import Hero from '@/modules/home/hero/Hero'
import LeadBanner from '@/modules/home/imageBanner/ImageBanner'
import Lead from '@/modules/home/lead/Lead'
import LeadBenefits from '@/modules/home/leadBenefits/LeadBenefits'
import LeadCards from '@/modules/home/leadCards/LeadCards'
import LeadContact from '@/modules/home/leadContact/LeadContact'
import LeadFeatures from '@/modules/home/leadFeatures/LeadFeatures'
import LeadList from '@/modules/home/leadList/LeadList'
import LeadWall from '@/modules/home/leadWall/LeadWall'

export default function Home() {
  return (
    <>
      <NextSeo
        additionalLinkTags={[
          {
            name: 'keywords',
            content:
              'Atalaso, software development, custom solutions, strategy, software consulting, technology solutions, software experts, IT consulting, digital transformation, software engineering',
          },
        ]}
      />
      <main role="main">
        <div>
          <Hero />
          <LeadBenefits />
          <LeadCards />
          <LeadBanner />
          <Lead />
          <LeadWall />
          <LeadList />
          <LeadFeatures />
          <LeadContact />
        </div>
      </main>
    </>
  )
}
