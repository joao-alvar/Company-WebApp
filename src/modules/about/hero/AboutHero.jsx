import Image from 'next/image'

import {
  AboutSection,
  AboutContainer,
  Wrapper,
  ImageWrap,
  Content,
} from './AboutHeroElements'

import Bg from '/public/images/Bg.jpg'

const AboutHero = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Wrapper>
            <ImageWrap>
              <Image
                src={Bg}
                alt="Maze Illustration"
                placeholder="blur"
                draggable={false}
              />
            </ImageWrap>
            <Content unselectable="on">
              <h1>Who we are</h1>
              <p>
                To answer this, we need to bring a common problem faced by all
                of us, The labyrinth, everyone has been there, this is a
                constant feeling for entrepreneurs, our mission It's helping our
                customers on this journey, to find the right path.
              </p>
            </Content>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default AboutHero
