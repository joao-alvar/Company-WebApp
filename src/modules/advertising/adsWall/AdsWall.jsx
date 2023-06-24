import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  ImageContent,
  ImageWrap,
  Listed,
  ListItems,
  TextWrap,
} from './AdsWallElements'

import Image from '/public/images/touch-screen-image.jpg'

const AdsWall = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageContent>
            <h3>Reimagine your marketing operation</h3>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="Hand using touch screen tablet at night"
              />
            </ImageWrap>
          </ImageContent>
          <Listed>
            <ListItems>
              <h3 className="number">1</h3>
              <TextWrap>
                <h4>Transforming your market approach for continued growth.</h4>
                <p>
                  Lead generation has evolved significantly in recent years.
                  Attracting and engaging potential customers with your business
                  requires a more sophisticated approach than ever before.
                </p>
                <p>
                  Our team of marketing experts specializes in crafting
                  cutting-edge marketing strategies that deliver the desired
                  outcomes for your business both in the short and long run.
                </p>
              </TextWrap>
            </ListItems>
            <ListItems>
              <h3 className="number">2</h3>
              <TextWrap>
                <h4>Amplifying your brand impact</h4>
                <p>
                  We craft compelling brand purposes that inspire action,
                  transforming brands into unforgettable experiences through
                  powerful and cohesive ideas that authentically convey your
                  essence across all touchpoints.
                </p>
              </TextWrap>
            </ListItems>
            <ListItems>
              <h3 className="number">3</h3>
              <TextWrap>
                <h4>Using data to improve marketing performance</h4>
                <p>
                  We centralize and analyze customer data, transforming it into
                  valuable strategies.
                </p>
                <p>
                  These strategies enable personalized and optimized
                  interactions along the customer journey, delivering impactful
                  results throughout the sales funnel.
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
