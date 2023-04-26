import Image from 'next/image'

import {AboutSection} from '../hero/AboutHeroElements'
import {AboutContainer, Content, AboutLead, AboutTitle} from './MissionElements'

import AboutIllustration from '/public/images/AboutIllustration.png'

const Mission = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <Content>
            <AboutTitle>Our Mission</AboutTitle>
            <p>
              Run a business is hard, we know, but lucky you don't have to do it
              alone. Your growth and development is our purpose Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptates corrupti
              provident voluptatem officia totam sequi eum consequuntur,
              recusandae animi fugit odit, sint dolore. Dolorum quis iste illo
              illum? Expedita, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates corrupti provident voluptatem officia
              totam sequi eum consequuntur, recusandae animi fugit odit, sint
              dolore. Dolorum quis iste illo illum? Expedita, ex! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptates corrupti
              provident voluptatem officia totam sequi eum consequuntur,
              recusandae animi fugit odit, sint dolore. Dolorum quis iste illo
              illum? Expedita, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates corrupti provident voluptatem officia
              totam sequi eum consequuntur, recusandae animi fugit odit, sint
              dolore. Dolorum quis iste illo illum? Expedita, ex!
            </p>
          </Content>
          <Content>
            <AboutTitle>Building the future.</AboutTitle>
            <Image
              src={AboutIllustration}
              alt="Statue illustration"
              placeholder="blur"
              draggable={false}
            />
            <p>
              We want our clients to set new heights and metrics and achieve
              greatness Our mission is to grown together
            </p>
            <p>
              We take pride in our work and are dedicated to providing our
              clients with the best digital solutions. We are committed to
              delivering projects on time and on budget.
            </p>
          </Content>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default Mission
