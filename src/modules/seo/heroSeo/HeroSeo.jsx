import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../../home/hero/HeroElements'
import {Container, Content, ImageWrap} from './HeroSeoElements'

import abstractBackground from 'public/images/celebration.jpeg'

const HeroSeo = () => {
  return (
    <Section>
      <Container>
        <Content>
          <h1>A new range of possibilities</h1>
          <p>
            Drive organic traffic, boost visibility, and dominate search
            rankings
          </p>
        </Content>
        <ImageWrap>
          <ImageComponent
            src={abstractBackground}
            alt="Happy people celebrate with sparkling candles"
            draggable={false}
            priority={true}
          />
        </ImageWrap>
      </Container>
    </Section>
  )
}

export default HeroSeo
