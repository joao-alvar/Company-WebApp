import React from 'react'
import {Section, Container, Content} from './HeroElements'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
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
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default Hero
