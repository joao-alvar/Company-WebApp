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
    pretitle: 'Business innovation unleashed',
    title: 'IT infrastructure lays the foundation for innovation',
    paragraph: `With cloud-based solutions, your teams can experiment, iterate, and deploy new ideas faster than ever before. The cloud's flexible nature allows for quick prototyping and testing, empowering you to bring revolutionary products and services to market at unprecedented speed.`,
    image: ImageOne,
    alt: 'Two colleagues, a man and a woman, are using a laptop together at an office desk.',
  },
  {
    pretitle: 'Scalability powers your growth',
    title: 'Scale your IT operations with a cloud infrastructure',
    paragraph: `Your business can effortlessly expand as your success soars, scale your resources up or down with ease, ensuring that your IT infrastructure never becomes a hindrance to your ambitions.`,
    image: ImageTwo,
    alt: 'IT professional checking data center hardware equipment',
  },
  {
    pretitle: 'Strategic advantage',
    title: 'In an ever-changing world, agility is a non-negotiable advantage',
    paragraph: `Traditional on-premises infrastructures can impede adaptability and scalability, but cloud solutions free your business from rigid hardware constraints. With the agility of the cloud, you'll find your organization seamlessly adjusts to market changes, customer demands, and unforeseen challenges.`,
    image: ImageThree,
    alt: 'Two industry engineers operate heavy control machine with computer laptop to help operational problem analysis.',
  },
  {
    pretitle: 'Cloud migration',
    title: 'Transition your operations to the cloud with ease',
    paragraph: `With our meticulous cloud migration planning, we follow all implementation guidelines based on methodologies and best practices to expedite your migration to the cloud safely, with the support of specialized professionals with extensive experience in the cloud migration process.`,
    image: ImageFour,
    alt: 'Colorful light exposure in a tunnel.',
  },
]

const CloudGrid = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <h2>Adopting the cloud to help solve challenges</h2>
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
