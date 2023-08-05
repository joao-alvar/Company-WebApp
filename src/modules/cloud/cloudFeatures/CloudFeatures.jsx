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
    title: 'Scalability',
    paragraph: `Cloud services provide seamless scalability, allowing businesses to swiftly adjust resources based on demand. This flexibility ensures optimal performance during peak times and avoids unnecessary over provisioning.`,
    image: BlockIcon,
    alt: 'Icon of three stacked cubes with three arrows facing opposite directions',
  },
  {
    title: 'Business continuity',
    paragraph: ` Cloud-based disaster recovery solutions minimize downtime during unexpected incidents, ensuring continuous operations and data resilience.`,
    image: ImprovementIcon,
    alt: 'Icon of a cog wheel with three rotation arrows and checklists representing continuous improvement',
  },
  {
    title: 'Cost-efficient',
    paragraph: `Cloud migration eliminates the need for upfront hardware investments and reduces operational expenses. Organizations pay only for the resources they use, optimizing costs and improving budget allocation.`,
    image: SavingIcon,
    alt: 'Icon of a hand holding a flying coin',
  },
  {
    title: 'Cloud security',
    paragraph: `By implementing robust security measures, organizations can confidently leverage the cloud's benefits. A well-designed cloud security framework ensures data privacy, regulatory compliance, and protection against evolving cyber threats, enabling businesses to navigate the digital landscape with confidence.`,
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
            <h2>Some key benefits of cloud</h2>
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
