import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  Title,
  Grid,
  GridContent,
  ImageWrap,
} from './AdsBenefitsElements'

import iconMoney from 'public/images/icons/money-circulation.png'
import iconProtect from 'public/images/icons/protect-icon.png'
import iconTarget from 'public/images/icons/target-app.png'
import iconAnalytics from 'public/images/icons/website-analytics.png'

const gridContent = [
  {
    title: 'Keyword optimization and research',
    paragraph:
      'To identify relevant and high-performing keywords  for your ads. Continuously monitor and refine your keyword list based on performance metrics and user search behavior.',
    icon: iconAnalytics,
    alt: 'Web-page analytics icon',
  },
  {
    title: 'Continuous monitoring and optimization',
    paragraph:
      'Regularly review campaign performance, monitor key metrics, and make data-driven optimizations. Test new strategies, adjust bidding strategies, and refine targeting parameters to continually improve your PPC advertising efforts.',
    icon: iconProtect,
    alt: 'Protection badge icon with a checked symbol inside',
  },
  {
    title: 'Audience targeting options',
    paragraph:
      'Utilize audience targeting options to reach your desired customer segments. Segment your audience based on demographics, interests, and behavior to deliver tailored ads and maximize relevance.',
    icon: iconTarget,
    alt: 'Icon of a target',
  },
  {
    title: 'Conversion tracking and measurement',
    paragraph:
      'Implement conversion tracking to measure the effectiveness of your PPC campaigns. Track key metrics such as conversions, cost per acquisition, and return on ad spend (ROAS) to optimize your bidding and budgeting strategies.',
    icon: iconMoney,
    alt: 'Money circulation icon',
  },
]

const AdsBenefits = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Enhance your marketing performance.</Title>
          <Grid>
            {gridContent.map((item, index) => {
              return (
                <GridContent key={index}>
                  <ImageWrap>
                    <ImageComponent src={item.icon} alt={item.alt} />
                  </ImageWrap>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </GridContent>
              )
            })}
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsBenefits
