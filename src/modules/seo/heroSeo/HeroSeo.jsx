import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../../home/hero/HeroElements'
import {Container, Content, ImageWrap} from './HeroSeoElements'

import abstractBackground from 'public/images/abstract-color.jpeg'

const HeroSeo = () => {
  return (
    <Section>
      <Container>
        <Content>
          <h1>A new range of possibilities</h1>
          <p>
            Powered by the cloud, edge computing enables businesses to reimagine
            experiences for people, purpose, and profitability, at speed and
            scale.
          </p>
        </Content>
        <ImageWrap>
          <ImageComponent
            src={abstractBackground}
            alt="Statue illustration"
            draggable={false}
            priority={true}
          />
        </ImageWrap>
      </Container>
    </Section>
  )
}

export default HeroSeo
