import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  LeadSection,
  LeadContainer,
  Card,
  TextContent,
  Title,
  Button,
  ImageWrap,
} from './LeadContactElements'

import illustration from 'public/images/camping-illustration.jpeg'

const LeadContact = () => {
  return (
    <div>
      <LeadSection>
        <LeadContainer>
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
              <ImageComponent src={illustration} alt="" />
            </ImageWrap>
          </Card>
        </LeadContainer>
      </LeadSection>
    </div>
  )
}

export default LeadContact
