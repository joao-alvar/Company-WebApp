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
    title: 'Cost savings',
    subtitle: '30%',
    paragraph: 'Reduction in IT infrastructure costs.',
  },
  {
    title: 'Data analytics and insights',
    subtitle: '52%',
    paragraph: 'Better data analytics capabilities.',
  },
  {
    title: 'Enhanced security',
    subtitle: '94%',
    paragraph: 'Of businesses improved security.',
  },
]

const CloudCards = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <h2>IT infrastructure at a fraction of the cost</h2>
          <p>
            Cloud migration enables businesses to leverage cutting-edge
            technology, achieve cost efficiencies, and become more agile in
            today&apos;s dynamic market landscape. By embracing cloud solutions,
            organizations can transform their operations, improve security, and
            drive innovation to remain ahead of the competition.
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
