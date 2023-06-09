import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../hero/HeroElements'
import {
  Container,
  Card,
  TextContent,
  Title,
  Button,
  ImageWrap,
} from './LeadContactElements'

import Image from 'public/images/home-black-abstract-background.jpeg'

const LeadContact = () => {
  return (
    <div>
      <Section>
        <Container>
          <Card>
            <TextContent>
              <Title>
                <h2>Let&apos;s make something extraordinary together</h2>
              </Title>
              <Button href="/contact" data-clog-click>
                Start Now
              </Button>
            </TextContent>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="Dark abstract background with wave shapes"
              />
            </ImageWrap>
          </Card>
        </Container>
      </Section>
    </div>
  )
}

export default LeadContact
