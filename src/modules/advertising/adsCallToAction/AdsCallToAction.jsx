import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  ContentWrap,
  ImageWrap,
  Button,
} from './AdsCallToActionElements'

import city_illustration from '/public/images/City-illustration.jpeg'

const AdsCallToAction = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ContentWrap>
            <h2>Not sure yet? we&apos;ll put you on the right path</h2>
            <Button href="/contact">Get in touch</Button>
          </ContentWrap>
          <ImageWrap>
            <ImageComponent
              src={city_illustration}
              alt={'City illustration with buildings and a bridge'}
            />
          </ImageWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsCallToAction
