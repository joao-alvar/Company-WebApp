import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../../home/hero/HeroElements'
import {Container, ImageWrap, Content} from './CloudCarouselElements'

import ImageThree from 'public/images/blurry-lights-city-traffic.jpeg'
import ImageOne from 'public/images/smiling-man-laptop.jpg'
import ImageTwo from 'public/images/smiling-woman.jpg'

const imageOneAlt =
  'Happy young creative entrepreneur laughing smiling writes in a notebook next to laptop in a modern workspace office at home'

const imageTwoAlt =
  'Portrait of smiling business woman sitting enjoy the idea with tablet and laptop at office.'

const imageThreeAlt =
  'The blurry lights of city traffic. Budapest, Hungary. Evening illumination of the building'

const items = [
  <div className="item" data-value="1">
    <Content>
      <h2>Driving results that matter</h2>
      <p>
        The sky is full of satellites…but how to harness the data? e-GEOS’
        solution is an AI-powered product that makes geoinformation data
        accessible through a simple user interface.
      </p>
    </Content>
    <ImageWrap>
      <ImageComponent src={ImageOne} alt={imageOneAlt} draggable={false} />
    </ImageWrap>
  </div>,
  <div className="item" data-value="2">
    <Content>
      <h2>Continuous monitoring and optimization</h2>
      <p>
        Coral reefs, like rainforests, are severely threatened by climate change
        and pollution. But a new cloud-based AI tool is revolutionizing marine
        conservation around the world..
      </p>
    </Content>
    <ImageWrap>
      <ImageComponent src={ImageTwo} alt={imageTwoAlt} draggable={false} />
    </ImageWrap>
  </div>,
  <div className="item" data-value="3">
    <Content>
      <h2>Audience targeting options</h2>
      <p>
        We bring mythical creatures and surreal surroundings to life for
        Netflix, through visual effects (VFX) that suspend disbelief and empower
        imagination.
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
            autoPlayInterval={3500}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            keyboardNavigation={true}
          />
        </>
      </Container>
    </Section>
  )
}

export default CloudCarousel
