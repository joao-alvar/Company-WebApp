import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Content, ImageWrap} from './SeoStrategyElements'

import seoImage from 'public/images/seo-strategy.jpeg'

const SeoStrategy = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h2>Driving results that matters</h2>
            <p>
              The best SEO strategy may vary depending on the specific needs and
              goals of a business, as well as the competitive landscape of the
              industry. SEO is a long-term investment, and results may take time
              to materialize. Consistency, adaptability, and a holistic approach
              are key to implementing an effective SEO strategy that drives
              organic traffic, improves search rankings, and boosts your online
              visibility.
            </p>
          </Content>
          <ImageWrap>
            <ImageComponent
              src={seoImage}
              alt="Seo-Optimization Scheme For Websites With Words Over Office Desk Background"
              draggable={false}
            />
          </ImageWrap>
        </Container>
      </Section>
    </>
  )
}

export default SeoStrategy
