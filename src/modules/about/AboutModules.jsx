import Image from 'next/image'

import {
  AboutSection,
  AboutContainer,
  MemoirWrap,
  MemoirContentLeft,
  MemoirContentRight,
  MissionWrap,
  AboutLead,
  AboutTitle,
  QuoteContainer,
  QuoteText,
  QuoteIconRight,
  QuoteIconLeft,
} from './AboutElements'

import AboutIllustration from '/public/images/AboutIllustration.png'
import Bg from '/public/images/Bg.jpg'

const AboutModules = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <MemoirWrap>
            <MemoirContentLeft>
              <Image src={Bg} alt="Maze Illustration" draggable={false} />
            </MemoirContentLeft>
            <MemoirContentRight unselectable="on">
              <h1>Who we are</h1>
              <p>
                To answer this, we need to bring a common problem faced by all
                of us, The labyrinth, everyone has been there, this is a
                constant feeling for entrepreneurs, our mission It's helping our
                customers on this journey, to find the right path.
              </p>
            </MemoirContentRight>
          </MemoirWrap>
        </AboutContainer>
      </AboutSection>
      <AboutSection>
        <AboutContainer style={{height: '45em'}}>
          <MissionWrap>
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
          </MissionWrap>
        </AboutContainer>
      </AboutSection>

      <AboutSection>
        <AboutContainer style={{height: '50em'}}>
          <AboutLead>
            <AboutTitle>Building the future.</AboutTitle>
            <Image
              src={AboutIllustration}
              alt="Statue illustration"
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
          </AboutLead>
        </AboutContainer>
      </AboutSection>
      <AboutSection>
        <QuoteContainer>
          <QuoteText>
            <div>
              <QuoteIconLeft />

              <h2>
                Coming together is a beginning, staying together is progress,
                and working together is success
              </h2>
              <QuoteIconRight />
            </div>
            <p>Henry Ford</p>
          </QuoteText>
        </QuoteContainer>
      </AboutSection>
    </>
  )
}

export default AboutModules
