import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  Section,
  Container,
  Wrapper,
  Content,
  Title,
  HeroText,
  ImageContainer,
} from './HeroElements'

import heroImage from 'public/images/home-hero.png'

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Content>
              {/* <Title>Empowering Your company and expanding your horizons</Title> */}
              <Title>Your go to solution, scale your business.</Title>
              <HeroText>
                We offer a range of services to help you streamline your
                operations, reach new customers.
              </HeroText>
            </Content>
            <ImageContainer>
              <ImageComponent src={heroImage} alt="" priority={true} />
            </ImageContainer>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}

export default Hero
