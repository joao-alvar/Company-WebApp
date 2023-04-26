import Image from 'next/image'
import Link from 'next/link'

import {HeroBtn, HeroBtnRight, Section} from '@/modules/home/hero/HeroElements'

import {Container, Content, LinkWrap, ImageWrap} from './HeroAdsElements'

import billboard from '/public/images/billboard.jpeg'

const HeroAds = () => {
  const handleClickScroll = () => {
    const element = document.querySelector('#seo')

    element?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <Section>
      <Container>
        <Content>
          <h1>Why choose Atalaso&apos;s expertise as your go to solution?</h1>
          <p>
            As a homeowner, you have plenty of options when it comes to solar.
            Learn what sets ION apart and what you can expect as a customer.
          </p>
          <LinkWrap>
            <HeroBtn>
              <Link href="/contact">Get started</Link>
            </HeroBtn>
            <HeroBtnRight>
              <span onClick={handleClickScroll}>Learn more</span>
            </HeroBtnRight>
          </LinkWrap>
        </Content>
        <ImageWrap>
          <Image src={billboard} alt="Something" />
        </ImageWrap>
      </Container>
    </Section>
  )
}

export default HeroAds
