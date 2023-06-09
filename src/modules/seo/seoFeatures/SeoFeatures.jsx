import {IoSpeedometerOutline} from 'react-icons/io5'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Grid,
  ImageWrap,
  Icon,
} from './SeoFeaturesElements'

import customerInsightIcon from 'public/images/icons/customer-insight-icon.png'
import linkIcon from 'public/images/icons/link-icon.png'
import qualityIcon from 'public/images/icons/quality-icon.png'
import rotationIcon from 'public/images/icons/rotation-icon.png'
import structureIcon from 'public/images/icons/structure-icon.png'

const SeoFeatures = () => {
  return (
    <Section>
      <Container>
        <Content>
          <TitleWrap>
            <h2>Some of our approaches</h2>
          </TitleWrap>
          <GridContainer>
            <Grid>
              <ImageWrap>
                <Icon as={IoSpeedometerOutline} />
              </ImageWrap>
              <h3>Analytics and measurement</h3>
              <p>
                Analyze key SEO metrics. Monitor performance, organic traffic,
                keyword rankings, and conversion rates.
              </p>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={customerInsightIcon} alt="" />
              </ImageWrap>
              <h3>User experience (UX)</h3>
              <p>
                Improve user experience providing intuitive navigation,
                easy-to-use interfaces, and relevant content. Aim to reduce
                bounce rates, increase time on page.
              </p>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={linkIcon} alt="" />
              </ImageWrap>
              <h3>Link building</h3>
              <p>
                Build a strong and diverse backlink profile by earning
                high-quality links from authoritative websites.
              </p>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={qualityIcon} alt="" />
              </ImageWrap>
              <h3>Quality content creation</h3>
              <p>
                Develop high-quality, informative, and engaging content that
                resonates with your target audience.
              </p>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={structureIcon} alt="" />
              </ImageWrap>
              <h3>Technical SEO</h3>
              <p>
                Optimize website structure, sitemaps, URL structure, canonical
                tags, and crawlability.
              </p>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={rotationIcon} alt="" />
              </ImageWrap>
              <h3>Continuous optimization</h3>
              <p>
                SEO is an ongoing process. Stay updated with the latest
                algorithm changes, industry trends, and best practices.
              </p>
            </Grid>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default SeoFeatures
