import ImageComponent from '@/components/imageComponent/ImageComponent'

import {AboutSection} from '../hero/AboutHeroElements'
import {AboutContainer, Content, AboutTitle, ImageWrap} from './MissionElements'

import Bg from 'public/images/Gallery.jpg'

const Mission = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Content>
            <h2>Our Mission</h2>
            <p>
              Run a business is hard, we know, but lucky you don&apos;t have to
              do it alone. Your growth and development is our purpose. We want
              our clients to set new heights and metrics and achieve greatness
              Our mission is to grown together We take pride in our work and are
              dedicated to providing our clients with the best digital
              solutions. We are committed to delivering projects on time and on
              budget.
            </p>
          </Content>
          <ImageWrap>
            <ImageComponent
              src={Bg}
              alt="Statue illustration"
              draggable={false}
            />
          </ImageWrap>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default Mission
