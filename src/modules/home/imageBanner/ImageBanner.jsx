import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  Section,
  Container,
  ImageWrap,
  Content,
  TextWrap,
} from './ImageBannerElements'

import backgroundImg from '/public/images/busy-sidewalk.jpeg'

const LeadBanner = () => {
  return (
    <Section>
      <Container>
        <ImageWrap>
          <ImageComponent src={backgroundImg} alt="" priority={true} />
        </ImageWrap>
        <Content>
          <TextWrap>
            <h2>Work smarter with Adobe Acrobat Sign.</h2>
            <p>
              Collect signatures and sign documents faster than ever, so you can
              spend more time doing what you do best.
            </p>
          </TextWrap>
        </Content>
      </Container>
    </Section>
  )
}

export default LeadBanner
