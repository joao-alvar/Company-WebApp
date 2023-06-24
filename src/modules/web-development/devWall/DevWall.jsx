import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Title,
  Wrapper,
  ImageWrap,
  Content,
  Button,
} from './DevWallElements'

import image from '/public/images/woman-touch-tablet.jpg'

const DevWall = () => {
  return (
    <Section>
      <Container>
        <Title>Success thrives on innovation</Title>
        <Wrapper>
          <ImageWrap>
            <ImageComponent
              src={image}
              alt="Woman in an office, looking and touching a tablet and smiling, while three people in the background works."
            />
          </ImageWrap>
          <Content>
            <p>
              Technology adoption is essential for staying relevant in a rapidly
              changing business landscape. The digital revolution has reshaped
              consumer expectations, market dynamics, and industry norms.
              Businesses that fail to adapt to these changes risk becoming
              obsolete or losing market share to more tech-savvy competitors. By
              embracing technology, organizations can remain agile, responsive,
              and adaptable to evolving customer demands and market trends.
            </p>
            <Button href="/contact" data-clog-click>
              Get started
            </Button>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default DevWall
