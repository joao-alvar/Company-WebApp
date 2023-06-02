import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  AboutSection,
  AboutContainer,
  Wrapper,
  ImageWrap,
  Content,
} from './AboutHeroElements'

import heroImage from 'public/images/Gallery.jpg'

const AboutHero = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Wrapper>
            <Content>
              <h1>Who we are.</h1>
              <p>
                To answer this, we need to bring a common problem faced by all
              </p>
            </Content>
            <ImageWrap>
              <ImageComponent
                src={heroImage}
                alt="Maze Illustration"
                draggable={false}
                priority={true}
              />
            </ImageWrap>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default AboutHero
