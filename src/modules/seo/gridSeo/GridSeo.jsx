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
          <h2>Edge Computing Powered</h2>
        </TitleWrap>
        <Content>
          <GridContainer>
            <Grid>
              <h3>Custom Price</h3>
              <p>
                Interactive, self-paced technical training for smaller teams
              </p>
            </Grid>
            <Grid>
              <h3>Custom Price</h3>
              <p>
                Interactive, self-paced technical training for smaller teams
              </p>
            </Grid>
            <Grid>
              <h3>Custom Price</h3>
              <p>
                Interactive, self-paced technical training for smaller teams
              </p>
            </Grid>
            <Grid>
              <h3>Custom Price</h3>
              <p>
                Interactive, self-paced technical training for smaller teams
              </p>
            </Grid>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default GridSeo
