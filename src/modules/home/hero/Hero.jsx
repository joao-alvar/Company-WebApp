import {
  ButtonPrimary,
  ButtonSecondary,
} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  Section,
  Container,
  Wrapper,
  Content,
  Title,
  HeroText,
  LinkWrap,
  ImageContainer,
} from './HeroElements'

import heroImage from 'public/images/Workplace-abstract-illustration.jpg'

const handleClickScroll = () => {
  const element = document.querySelector('#section-2')

  element?.scrollIntoView({behavior: 'smooth'})
}
const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Content>
              <h3 className="pre_title">Creative solutions</h3>
              <Title>Unleash the Extraordinary Reimagine Your Business</Title>
              <HeroText>
                Partnering with companies to expand operations, maximize
                profits, and conquer new markets
              </HeroText>
              <LinkWrap>
                <ButtonPrimary href="/contact">Get started</ButtonPrimary>
                <ButtonSecondary
                  className="secondary_button"
                  as="button"
                  onClick={handleClickScroll}
                >
                  How we work
                </ButtonSecondary>
              </LinkWrap>
            </Content>
            <ImageContainer>
              <ImageComponent
                src={heroImage}
                alt="Girl sitting in front of laptop and a guy in front of web components illustration vector"
                priority={true}
              />
            </ImageContainer>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}

export default Hero
