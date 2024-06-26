import React from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Content} from './DevCasesElements'

import Cases_1 from '/public/images/Cases_1.jpg'
import Cases_2 from '/public/images/Cases_2.jpg'
import Cases_3 from '/public/images/Cases_3.jpg'

const DevCases = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageComponent
            src={Cases_1}
            alt="Home land-page template with a colorful shaped illustration"
            height={250}
          />
          <ImageComponent
            src={Cases_2}
            alt="Home land-page template with a beautiful watch as a background image and a text about marketing presentation"
            height={250}
          />
          <ImageComponent
            src={Cases_3}
            alt="Home land-page template with a gradient blue square shape illustration"
            height={250}
          />
        </Content>
      </Container>
    </Section>
  )
}

export default DevCases
