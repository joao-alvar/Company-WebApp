import ImageComponent from '@/components/imageComponent/ImageComponent'

import {IconArrow} from '@/modules/software-development/callToAction/CallToActionElements'

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
                alt="A happy businesswoman is smiling, wearing headphones, sitting, and listening to music in a relaxed manner at the office."
              />
            </ImageWrap>
            <TextContent>
              <h2>Grow with cloud</h2>
              <Title>
                <h3>
                  A full range of services and solutions to help you adopt the
                  Cloud and start growing!
                </h3>
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
