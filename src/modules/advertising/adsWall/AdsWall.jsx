import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'
import {
  Container,
  ImageWrap,
  Content,
  Button,
} from '@/modules/web-development/devWall/DevWallElements'

import DesignTemplate from '/public/images/DesignTemplate.jpeg'

const AdsWall = () => {
  return (
    <Section>
      <Container>
        <ImageWrap>
          <ImageComponent src={DesignTemplate} alt="something" />
        </ImageWrap>
        <Content>
          <h2>Top Lead Gen Case Studies</h2>
          <p>
            Lead generation has changed a lot over the years. Getting people
            interested in your business isn&apos;t as simple as it once was. Our
            marketing experts create modern, leading-edge marketing strategies
            producing the results your business needs now and in the long term.
          </p>
          <Button href="/" data-clog-click>
            Get started
          </Button>
        </Content>
      </Container>
    </Section>
  )
}

export default AdsWall
