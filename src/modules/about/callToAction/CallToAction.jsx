import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {AboutSection} from '../hero/AboutHeroElements'
import {Container, Content, Icon, ImageWrap} from './CallToActionElements'

import abstractPaint from 'public/images/abstract-paint-background.jpeg'
const AboutCallToAction = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <h2>Join 28+ million people who already trust us with their money</h2>
          <ButtonPrimary href="/contact" className=" button" data-clog-click>
            Get started <Icon />
          </ButtonPrimary>
        </Content>
        <ImageWrap>
          <ImageComponent src={abstractPaint} alt="Ima" priority={true} />
        </ImageWrap>{' '}
      </Container>
    </AboutSection>
  )
}

export default AboutCallToAction
