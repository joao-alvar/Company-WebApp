import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'
// import localFont from '@next/font/local'

// const myFont = localFont({ src: '/public/fonts/inter/inter-v12-latin-600.woff' })

import {
  Section,
  Container,
  ContentLeft,
  ContentRight,
  Title,
  HeroText,
  ButtonContainer,
} from './HeroElements'

import HeroBg from 'public/images/HeroArt.png'

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <ContentLeft>
            <Title>
              Empowering Your company and expand your horizons and maximizing
              every aspect
            </Title>

            <HeroText>
              We offer a range of services to help you streamline your
              operations, reach new customers, and ultimately increase your
              bottom line
            </HeroText>
            <ButtonContainer>
              <ButtonPrimary href="/" data-clog-click>
                Learn more
              </ButtonPrimary>
            </ButtonContainer>
          </ContentLeft>
          <ContentRight>
            <div className="image_container">
              <ImageComponent
                src={HeroBg}
                alt="Hero Art that portraits two birds"
                width="300"
                height="300"
              />
            </div>
          </ContentRight>
        </Container>
      </Section>
    </>
  )
}

export default Hero
