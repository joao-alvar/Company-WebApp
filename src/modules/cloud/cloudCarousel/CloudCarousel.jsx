import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../../home/hero/HeroElements'
import {Container, ImageWrap, Content} from './CloudCarouselElements'

import ImageThree from 'public/images/blurry-lights-city-traffic.jpeg'
import ImageOne from 'public/images/smiling-man-laptop.jpg'
import ImageTwo from 'public/images/smiling-woman.jpg'

const imageOneAlt =
  'A smiling businessman sitting down, writing in a notebook, and looking at a laptop in the office'

const imageTwoAlt =
  'A smiling businesswoman sits and enjoys the idea with a tablet and laptop at her office'

const imageThreeAlt =
  'The blurry lights of city traffic. Budapest, Hungary. Evening illumination of the building'

const items = [
  <div className="item" data-value="1" key="1">
    <Content>
      <h2>Enhancing data accessibility and insights</h2>
      <p>
        Data is the lifeblood of businesses today. Cloud integration empowers
        organizations to access and share data easily across departments,
        locations, and stakeholders. This increased accessibility of data fuels
        data-driven decision-making, enabling leaders to gain valuable insights
        and respond quickly to market trends and customer needs.
      </p>
    </Content>
    <ImageWrap>
      <ImageComponent src={ImageOne} alt={imageOneAlt} draggable={false} />
    </ImageWrap>
  </div>,
  <div className="item" data-value="2" key="2">
    <Content>
      <h2>Seamless customer experience</h2>
      <p>
        For businesses, providing a seamless customer experience is critical.
        Cloud integration allows companies to consolidate customer data from
        multiple sources, leading to a comprehensive understanding of customer
        preferences and behaviors. Armed with this knowledge, companies can
        deliver personalized and targeted experiences, promoting customer
        loyalty and satisfaction.
      </p>
    </Content>
    <ImageWrap>
      <ImageComponent src={ImageTwo} alt={imageTwoAlt} draggable={false} />
    </ImageWrap>
  </div>,
  <div className="item" data-value="3" key="3">
    <Content>
      <h2>Unifying disparate systems</h2>
      <p>
        The modern business ecosystem relies on a diverse range of applications,
        databases, and software systems. Cloud integration acts as a unifying
        force, bridging the gaps between these disparate systems, integrating
        cloud-based solutions with on-premises and third-party applications,
        companies achieve a cohesive and streamlined operating landscape.
      </p>
    </Content>
    <ImageWrap>
      <ImageComponent src={ImageThree} alt={imageThreeAlt} draggable={false} />
    </ImageWrap>
  </div>,
]
const CloudCarousel = () => {
  return (
    <Section>
      <Container>
        <>
          <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            disableButtonsControls
            items={items}
            key={items}
            mouseTracking
            keyboardNavigation={true}
          />
        </>
      </Container>
    </Section>
  )
}

export default CloudCarousel
