import React from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Content} from './DevCasesElements'

import Cases_1 from '/public/images/Cases_1.jpeg'
import Cases_2 from '/public/images/Cases_2.jpeg'
import Cases_3 from '/public/images/Cases_3.jpeg'

const DevCases = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageComponent src={Cases_1} alt="" height={250} />
          <ImageComponent src={Cases_2} alt="" height={250} />
          <ImageComponent src={Cases_3} alt="" height={250} />
        </Content>
      </Container>
    </Section>
  )
}

export default DevCases
