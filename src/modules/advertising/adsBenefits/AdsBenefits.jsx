import Image from 'next/image'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Banner,
  Wrapper,
  Content,
  IconWrap,
} from './AdsBenefitsElements'

import illustration_1 from '/public/images/Trend.jpeg'

const AdsBenefits = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Banner style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
            <Content>
              <h2>
                A comprehensive social outreach plan for Facebook and Instagram
                will be strategically executed on a weekly basis. With the
                operative key consideration being strategic targeting of an
                audience profile that has a high
              </h2>
              <p>
                propensity of consuming Pocari Sweat. A primary focus will be to
                reach and penetrate the active “individual performance
                enthusiast.” The strategies presented here utilize the very
                latest social media systems and technologies. These are the same
                tactics utilized by America’s most prominent and successful
                organizations to drive ongoing brand awareness, ROI, and
                loyalty.
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
        </Wrapper>
        <Wrapper>
          <Banner>
            <Content>
              <h2>
                A comprehensive social outreach plan for Facebook and Instagram
                will be strategically executed on a weekly basis. With the
                operative key consideration being strategic targeting of an
                audience profile that has a high
              </h2>
              <p>
                propensity of consuming Pocari Sweat. A primary focus will be to
                reach and penetrate the active “individual performance
                enthusiast.” The strategies presented here utilize the very
                latest social media systems and technologies. These are the same
                tactics utilized by America’s most prominent and successful
                organizations to drive ongoing brand awareness, ROI, and
                loyalty.
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
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsBenefits
