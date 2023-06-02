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
                <h2> The beginning of your growth Enjoy the journey! </h2>
              </Title>
              <Button href="/contact" data-clog-click>
                Start Now
              </Button>
            </TextContent>
            <ImageWrap>
              <ImageComponent src={Image} alt="" />
            </ImageWrap>
          </Card>
        </Container>
      </Section>
    </div>
  )
}

export default LeadContact
