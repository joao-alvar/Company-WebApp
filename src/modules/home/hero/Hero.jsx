import Image from 'next/image'

import {ButtonPrimary} from '@/components/button/ButtonElements'

import {
  Section,
  Container,
  ContentLeft,
  ContentRight,
  Title,
  HeroText,
  ButtonContainer,
  ArrowIconWrap,
  ArrowDown,
} from './HeroElements'

import HeroBg from 'public/images/HeroArt.png'

const Hero = () => {
  const handleClickScroll = () => {
    const element = document.querySelector('#section-1')

    element?.scrollIntoView({behavior: 'smooth'})
  }
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
              <Image
                src={HeroBg}
                alt="Hero Art that portraits two birds"
                width="300"
                height="300"
              />
            </div>
          </ContentRight>
          <ArrowIconWrap onClick={handleClickScroll} data-clog-click>
            <ArrowDown />
          </ArrowIconWrap>
        </Container>
      </Section>
    </>
  )
}

export default Hero
