import ImageComponent from '@/components/imageComponent/ImageComponent'

import {AboutSection} from '../hero/AboutHeroElements'
import {AboutContainer, Wrapper, Content, ImageWrap} from './MissionElements'

import Image from 'public/images/glass-office-meeting.jpeg'

const Mission = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Wrapper>
            <Content>
              <h2>Our Mission</h2>
              <p>
                Atalaso is here to be a catalyst for positive change, helping
                businesses thrive in a rapidly evolving digital landscape. We
                are here to support our clients on their journey to success,
                providing the expertise and support they need to achieve their
                goals and unlock new opportunities. Together, we can achieve
                greatness and shape a brighter future.
              </p>
            </Content>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="People chatting in the glass meeting room"
                draggable={false}
              />
            </ImageWrap>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default Mission
