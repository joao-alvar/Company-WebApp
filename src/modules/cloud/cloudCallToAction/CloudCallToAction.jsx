import ImageComponent from '@/components/imageComponent/ImageComponent'

import {IconArrow} from '@/modules/web-development/callToAction/CallToActionElements'

import {AboutSection} from '../../about/hero/AboutHeroElements'
import {
  Container,
  Card,
  TextContent,
  Title,
  Button,
  ImageWrap,
} from './CloudCallElements'

import Image from 'public/images/woman-headphones.jpg'

const LeadContact = () => {
  return (
    <div>
      <AboutSection>
        <Container>
          <Card>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="Happy business woman smiling, wearing headphones sitting listening to music in a relaxed manner at the office."
              />
            </ImageWrap>
            <TextContent>
              <Title>
                <h2>Let&apos;s make something extraordinary together</h2>
              </Title>
              <Button href="/contact" data-clog-click>
                Start Now <IconArrow />
              </Button>
            </TextContent>
          </Card>
        </Container>
      </AboutSection>
    </div>
  )
}

export default LeadContact
