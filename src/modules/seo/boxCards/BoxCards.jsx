import {Section} from '@/modules/home/hero/HeroElements'

import {Container, GridWrap, Grid} from './BoxCardsElements'

const BoxCards = () => {
  return (
    <Section>
      <Container>
        <GridWrap>
          <Grid>
            <h2>28+ milion</h2>
            <p>Personal users</p>
          </Grid>
          <Grid>
            <h2>28+ milion</h2>
            <p>Personal users</p>
          </Grid>
          <Grid>
            <h2>28+ milion</h2>
            <p>Personal users</p>
          </Grid>
          <Grid>
            <h2>28+ milion</h2>
            <p>Personal users</p>
          </Grid>
        </GridWrap>
      </Container>
    </Section>
  )
}

export default BoxCards
