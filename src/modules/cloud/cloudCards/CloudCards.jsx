import {Section} from '../../home/hero/HeroElements'
import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Cards,
  CardContent,
} from './CloudCardsElements'

const gridContent = [
  {
    title: 'Network',
    subtitle: '1/4',
    paragraph: 'To identify relevant and high-performing.',
  },
  {
    title: 'Continuous',
    subtitle: '>3X',
    paragraph: 'Regularly review campaign performance.',
  },
  {
    title: 'Audience',
    subtitle: '20X',
    paragraph: 'Utilize audience targeting options.',
  },
]

const CloudCards = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <h2 className="desktop">
            An essential component for digital transformation
          </h2>
          <h2 className="mobile">Thrive for transformation</h2>
          <p>
            Save money without inflexible up-front commitments. In contrast to
            others, OCI has the same low price in all cloud regions, including
            government and dedicated regions. We offer innovative features, such
            as flexible compute, auto-tuning storage, up to 10X lower data
            egress fees, and free tools and reports to help eliminate needless
            overpayment and billing surprises. Committed use discounts, software
            license portability, and loyalty rewards are also available.
          </p>
        </TitleWrap>
        <Content>
          <GridContainer>
            <>
              {gridContent.map((item, index) => {
                return (
                  <Cards key={index}>
                    <CardContent>
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                      <p>{item.paragraph}</p>
                    </CardContent>
                  </Cards>
                )
              })}
            </>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default CloudCards
