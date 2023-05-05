import Image from 'next/image'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Banner,
  BannerRight,
  Content,
  IconWrap,
} from './AdsBannerElements'

import building from '/public/images/building.jpeg'
import illustration_1 from '/public/images/Trend.jpeg'

const AdsBanner = () => {
  return (
    <Section id="seo">
      <Container>
        <Banner>
          <Content>
            <span>Event overview</span>
            <h2>
              A comprehensive social outreach plan for Facebook and Instagram
              will be strategically executed on a weekly basis.
            </h2>
            <p>
              propensity of consuming Pocari Sweat. A primary focus will be to
              reach and penetrate the active “individual performance
              enthusiast.” The strategies presented here utilize the very latest
              social media systems and technologies. These are the same tactics
              utilized by America’s most prominent and successful organizations
              to drive ongoing brand awareness, ROI, and loyalty.
            </p>
          </Content>
          <IconWrap>
            <Image
              src={illustration_1}
              width={300}
              height={300}
              alt="Illustration"
            />
          </IconWrap>
        </Banner>
        <BannerRight>
          <Content>
            <span style={{color: '#ffffff'}}>Event overview</span>
            <h2>
              A comprehensive social outreach plan for Facebook and Instagram
              will be strategically executed on a weekly basis. With the
              operative key consideration being strategic targeting of an
              audience profile that has a high
            </h2>
            <p style={{color: '#ffffff'}}>
              propensity of consuming Pocari Sweat. A primary focus will be to
              reach and penetrate the active “individual performance
              enthusiast.” The strategies presented here utilize the very latest
              social media systems and technologies. These are the same tactics
              utilized by America’s most prominent and successful organizations
              to drive ongoing brand awareness, ROI, and loyalty.
            </p>
          </Content>
          <Image src={building} alt="Building" />
        </BannerRight>
      </Container>
    </Section>
  )
}

export default AdsBanner
