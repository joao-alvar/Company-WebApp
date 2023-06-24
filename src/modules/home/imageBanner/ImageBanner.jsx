import Link from 'next/link'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  Section,
  Container,
  ImageWrap,
  Content,
  TextWrap,
} from './ImageBannerElements'

import backgroundImg from '/public/images/busy-sidewalk.jpg'

const LeadBanner = () => {
  return (
    <Section>
      <Container>
        <ImageWrap>
          <ImageComponent
            src={backgroundImg}
            alt="Canary Wharf plaza in central London at sunrise with commuters traveling to work panoramic"
            priority={true}
          />
        </ImageWrap>
        <Content>
          <TextWrap>
            <h2>Embracing the Pace of Change</h2>
            <p>
              In today&apos;s rapidly evolving world, change is the only
              constant. However, technology emerges as a powerful ally.
            </p>
            <p>
              The adoption of technology allows companies to remain agile and
              gain a competitive advantage.
            </p>
            <Link href="/contact" className="no_select">
              Start now
            </Link>
          </TextWrap>
        </Content>
      </Container>
    </Section>
  )
}

export default LeadBanner
