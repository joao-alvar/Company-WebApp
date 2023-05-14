import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {ButtonContainer, Section} from '@/modules/home/hero/HeroElements'

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
            <ButtonContainer>
              <ButtonPrimary href="/contact" className="button">
                Get started
              </ButtonPrimary>
              <ButtonPrimary
                as="button"
                onClick={handleClickScroll}
                isPrimary
                className="button_secondary button"
              >
                Learn more
              </ButtonPrimary>
            </ButtonContainer>
          </LinkWrap>
        </Content>
        <ImageWrap>
          <ImageComponent src={billboard} alt="Something" />
        </ImageWrap>
      </Container>
    </Section>
  )
}

export default HeroAds
