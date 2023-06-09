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
                Powering individuals and teams to think outside the box,
                challenging conventional wisdom, and finding innovative
                solutions to complex problems.
              </p>
            </Content>
            <ImageWrap>
              <ImageComponent
                src={heroImage}
                alt="People in gallery appreciating the arts on the wall"
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
