import Link from 'next/link'
import React from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Button, IconArrow} from './CallToActionElements'

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <h2>Ready to get started?</h2>
        <p>Join 20,000+ innovative businesses – big and small</p>
        <Link href="/contact">
          <Button>
            Start now <IconArrow />
          </Button>
        </Link>
      </Container>
    </Section>
  )
}

export default CallToAction
