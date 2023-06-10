import {Section} from '../../home/hero/HeroElements'
import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Grid,
} from './GridSeoElements'

const GridSeo = () => {
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
            <Grid>
              <h3>Increased organic visibility</h3>
              <p>
                SEO helps your website rank higher in search engine results
                pages (SERPs), leading to increased visibility and exposure to a
                larger audience.
              </p>
            </Grid>
            <Grid>
              <h3>Cost-effective marketing</h3>
              <p>
                Compared to other digital marketing channels like paid
                advertising, SEO offers a cost-effective approach. While it
                requires an upfront investment and ongoing optimization, the
                long-term benefits of SEO can outweigh the costs.
              </p>
            </Grid>
            <Grid>
              <h3>Long-term results</h3>
              <p>
                Unlike some other marketing tactics that provide short-term
                results, SEO is a long-term strategy. It involves continuous
                optimization and efforts to maintain and improve search
                rankings.
              </p>
            </Grid>
            <Grid>
              <h3>Competitive advantage</h3>
              <p>
                Businesses that invest in SEO gain a competitive advantage over
                those that don&apos;t. Ranking higher in search results
                increases your visibility and brand exposure, allowing you to
                capture a larger market share.
              </p>
            </Grid>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default GridSeo
