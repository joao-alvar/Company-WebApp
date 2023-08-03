import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../../home/hero/HeroElements'
import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Grid,
  ImageContainer,
  GridContent,
} from './CloudGridElements'

import ImageOne from 'public/images/colleagues-using-laptop.jpeg'
import ImageFour from 'public/images/Colorful-light-tunnel.jpeg'
import ImageTwo from 'public/images/IT-professional-checking-data-cente.jpg'
import ImageThree from 'public/images/team-worker cooperate.jpg'

const gridContent = [
  {
    pretitle: 'Keyword optimization',
    title: 'Keyword optimization and research',
    paragraph:
      'To identify relevant and high-performing keywords  for your ads. Continuously monitor and refine your keyword list based on performance metrics and user search behavior.',
    image: ImageOne,
    alt: 'Two colleagues a man and a woman, using a laptop together at an office desk',
  },
  {
    pretitle: 'Keyword',
    title: 'Continuous monitoring and optimization',
    paragraph:
      'Regularly review campaign performance, monitor key metrics, and make data-driven optimizations. Test new strategies, adjust bidding strategies, and refine targeting parameters to continually improve your PPC advertising efforts.',
    image: ImageTwo,
    alt: 'Two employees discussing cooperation planning having conversation and productive work',
  },
  {
    pretitle: 'Keyword',
    title: 'Audience targeting options',
    paragraph:
      'Utilize audience targeting options to reach your desired customer segments. Segment your audience based on demographics, interests, and behavior to deliver tailored ads and maximize relevance.',
    image: ImageThree,
    alt: 'Two industry engineers operate heavy control machine with computer laptop to help operational problem analysis.',
  },
  {
    pretitle: 'Keyword',
    title: 'Conversion tracking and measurement',
    paragraph:
      'Implement conversion tracking to measure the effectiveness of your PPC campaigns. Track key metrics such as conversions, cost per acquisition, and return on ad spend (ROAS) to optimize your bidding and budgeting strategies.',
    image: ImageFour,
    alt: 'Colorful light exposure in a tunnel.',
  },
]

const CloudGrid = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <h2 className="desktop">
            An essential component for digital transformation
          </h2>
          <h2 className="mobile">Thrive for transformation</h2>
        </TitleWrap>
        <Content>
          <GridContainer>
            <>
              {gridContent.map((item, index) => {
                return (
                  <Grid key={index}>
                    <ImageContainer>
                      <ImageComponent src={item.image} alt={item.alt} />
                    </ImageContainer>
                    <GridContent>
                      <h3>{item.pretitle}</h3>
                      <h4>{item.title}</h4>
                      <p>{item.paragraph}</p>
                    </GridContent>
                  </Grid>
                )
              })}
            </>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default CloudGrid
