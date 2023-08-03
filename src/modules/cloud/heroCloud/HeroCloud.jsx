import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Content, Wrap, ImageWrap} from './HeroCloudElements'

import heroImage from 'public/images/cloud-hero-img.jpeg'

const HeroCloud = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Content>
            <h1>
              Migrate your IT infrastructure and applications to the cloud.
            </h1>
            <p>Embrace the cloud and build a robust digital foundation.</p>
          </Content>
          <ImageWrap>
            <ImageComponent
              src={heroImage}
              alt="Focused business woman sitting at home office holds financial documents, working on laptop"
              priority={true}
            />
          </ImageWrap>
        </Wrap>
      </Container>
    </Section>
  )
}

export default HeroCloud
