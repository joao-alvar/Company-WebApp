import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Grid,
  ImageWrap,
  GridContent,
} from './CloudFeaturesElements'

import BlockIcon from 'public/images/icons/block-scale-icon.png'
import ImprovementIcon from 'public/images/icons/continuous-improvement-icon.png'
import SavingIcon from 'public/images/icons/savings-hand-icon.png'
import SecurityIcon from 'public/images/icons/security-icon.png'

const gridContent = [
  {
    title: 'Keyword optimization and research',
    paragraph:
      'To identify relevant and high-performing keywords  for your ads. Continuously monitor and refine your keyword list based on performance metrics and user search behavior.',
    image: BlockIcon,
    alt: 'Icon of three geometrical stacked boxes with three arrows facing opposite directions',
  },
  {
    title: 'Continuous monitoring and optimization',
    paragraph:
      'Regularly review campaign performance, monitor key metrics, and make data-driven optimizations. Test new strategies, adjust bidding strategies, and refine targeting parameters to continually improve your PPC advertising efforts.',
    image: ImprovementIcon,
    alt: 'Icon of a cog wheel with three rotation arrows and checklists representing continuous improvement',
  },
  {
    title: 'Audience targeting options',
    paragraph:
      'Utilize audience targeting options to reach your desired customer segments. Segment your audience based on demographics, interests, and behavior to deliver tailored ads and maximize relevance.',
    image: SavingIcon,
    alt: 'Icon of a hand holding a flying coin',
  },
  {
    title: 'Conversion tracking and measurement',
    paragraph:
      'Implement conversion tracking to measure the effectiveness of your PPC campaigns. Track key metrics such as conversions, cost per acquisition, and return on ad spend (ROAS) to optimize your bidding and budgeting strategies.',
    image: SecurityIcon,
    alt: 'Icon of a server with a security shield in front',
  },
]

const CloudFeatures = () => {
  return (
    <Section>
      <Container>
        <Content>
          <TitleWrap>
            <h2>
              Some <span>of our approaches</span>
            </h2>
          </TitleWrap>
          <GridContainer>
            <>
              {gridContent.map((item, index) => {
                return (
                  <Grid key={index}>
                    <ImageWrap>
                      <ImageComponent src={item.image} alt={item.alt} />
                    </ImageWrap>
                    <GridContent>
                      <h3>{item.title}</h3>
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

export default CloudFeatures
