import Link from 'next/link'
import React from 'react'
import {TypeAnimation} from 'react-type-animation'

import {
  Section,
  Container,
  Content,
  TypeContainer,
  HeroText,
  ButtonContainer,
  HeroBtn,
  ArrowIconWrap,
} from './HeroElements'

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <video autoPlay loop muted>
            <source src="./videos/heroVideo.mp4" type="video/mp4" />
          </video>
          <Content>
            <TypeContainer>
              <TypeAnimation
                sequence={[
                  'Design for Innovation', // Types 'One'
                  3000, // Waits 1s
                  'Transform Business with Technology', // Deletes 'One' and types 'Two'
                  4000, // Waits 2s
                  'Scale your Infrastructure.',
                  4000, // Types 'Three' without deleting 'Two'
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                className="typedText"
                style={{display: 'inline-block'}}
              />
            </TypeContainer>
            <HeroText>
              We offer a range of services to help you streamline your
              operations, reach new customers, and ultimately increase your
              bottom line
            </HeroText>
            <ButtonContainer>
              <Link href="/">
                <HeroBtn>Learn more</HeroBtn>
              </Link>
              <ArrowIconWrap>
                <span className="m_scroll_arrows one" />
                <span className="m_scroll_arrows two" />
                <span className="m_scroll_arrows three" />
              </ArrowIconWrap>
            </ButtonContainer>
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default Hero
