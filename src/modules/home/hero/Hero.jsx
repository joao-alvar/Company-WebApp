import React from 'react'
import {TypeAnimation} from 'react-type-animation'

import {
  Section,
  Container,
  Content,
  TypeContainer,
  HeroText,
} from './HeroElements'

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
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
              Our platform offers a range of tools and services to help you
              streamline your operations, reach new customers, and ultimately
              increase your bottom line
            </HeroText>
            <p>
              out or looking to take your business to the next level, we have
              the resources you need to succeed. to make that possible. Whether
              you&apos;re a small startup or a large enterprise, we have the
              tools and resources you need to scale your business and achieve
              your goals. So why wait?
            </p>
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default Hero
