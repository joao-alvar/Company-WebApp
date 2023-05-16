import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  TitleWrap,
  ImageContent,
  ImageWrap,
  Listed,
  ListItems,
  TextWrap,
} from './AdsWallElements'

import DesignTemplate from '/public/images/DesignTemplate.jpeg'

const AdsWall = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <h2>Top Lead Gen Case Studies</h2>
        </TitleWrap>
        <Content>
          <ImageContent>
            <h3>Atalaso is your solution</h3>
            <ImageWrap>
              <ImageComponent src={DesignTemplate} alt="something" />
            </ImageWrap>
          </ImageContent>
          <Listed>
            <ListItems>
              <h3 className="number">1</h3>
              <TextWrap>
                <h4> Data science verifies accuracy</h4>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
              </TextWrap>
            </ListItems>
            <ListItems>
              <h3 className="number">2</h3>
              <TextWrap>
                <h4> Data science verifies accuracy</h4>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
              </TextWrap>
            </ListItems>
            <ListItems>
              <h3 className="number">3</h3>
              <TextWrap>
                <h4> Data science verifies accuracy</h4>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
              </TextWrap>
            </ListItems>
          </Listed>

          {/* <Button href="/" data-clog-click>
            Get started
          </Button> */}
        </Content>
      </Container>
    </Section>
  )
}

export default AdsWall
