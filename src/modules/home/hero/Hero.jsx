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

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Content>
              {/* <Title>Empowering Your company and expanding your horizons</Title> */}
              <h3 className="pre_title">Creativity solutions</h3>
              <Title>Your go to solution, scale your business.</Title>
              <HeroText>Scale your business with our services.</HeroText>
              <LinkWrap>
                <ButtonPrimary href="/">Get started</ButtonPrimary>
                <ButtonSecondary href="/">How we work</ButtonSecondary>
              </LinkWrap>
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
