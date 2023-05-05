import React from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Button, IconArrow} from './CallToActionElements'

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <h2>Ready to get started?</h2>
        <p>Join 20,000+ innovative businesses – big and small</p>
        <Button href="/contact" data-clog-click>
          Start now <IconArrow />
        </Button>
      </Container>
    </Section>
  )
}

export default CallToAction
