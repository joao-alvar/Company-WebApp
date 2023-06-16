import {Section} from '@/modules/home/hero/HeroElements'

import {Container, GridWrap, Grid} from './BoxCardsElements'

const BoxCards = () => {
  return (
    <Section>
      <Container>
        <GridWrap>
          <Grid>
            <h2>67%</h2>
            <p>Of clicks, go to the first five organic links</p>
          </Grid>
          <Grid>
            <h2>0.78%</h2>
            <p>Of users click on a link on the second page of results</p>
          </Grid>
          <Grid>
            <h2>53%</h2>
            <p>Of all website traffic is made of organic search</p>
          </Grid>
          <Grid>
            <h2>95%</h2>
            <p>Of search traffic comes from the first page results.</p>
          </Grid>
        </GridWrap>
      </Container>
    </Section>
  )
}

export default BoxCards
