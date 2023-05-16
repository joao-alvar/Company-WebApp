import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  AboutSection,
  AboutContainer,
  Wrapper,
  ImageWrap,
  Content,
} from './AboutHeroElements'

import Bg from 'public/images/Gallery.jpg'

const AboutHero = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Wrapper>
            <Content unselectable="on">
              <h1>Who we are</h1>
              <p>
                To answer this, we need to bring a common problem faced by all
                of us, The labyrinth, everyone has been there, this is a
                constant feeling for entrepreneurs, our mission It&apos;s
                helping our customers on this journey, to find the right path.
              </p>
            </Content>
            <ImageWrap>
              <ImageComponent
                src={Bg}
                alt="Maze Illustration"
                placeholder="blur"
                draggable={false}
              />
            </ImageWrap>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default AboutHero
