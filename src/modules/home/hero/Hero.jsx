import Image from 'next/image'
import Link from 'next/link'

import {
  Section,
  Container,
  ContentLeft,
  ContentRight,
  Title,
  HeroText,
  ButtonContainer,
  HeroBtn,
  HeroBtnRight,
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
          {/* <video autoPlay loop muted>
            <source src="./videos/heroVideo.mp4" type="video/mp4" />
          </video> */}
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
              <HeroBtn>
                <Link href="/">Learn more</Link>
              </HeroBtn>
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
          <ArrowIconWrap onClick={handleClickScroll}>
            <ArrowDown />
            {/* <span className="m_scroll_arrows two" /> */}
            {/* <span className="m_scroll_arrows three" /> */}
          </ArrowIconWrap>
        </Container>
      </Section>
    </>
  )
}

export default Hero
