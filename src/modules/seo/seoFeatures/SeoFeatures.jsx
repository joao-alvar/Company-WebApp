import {IoSpeedometerOutline} from 'react-icons/io5'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  TitleWrap,
  Content,
  GridContainer,
  Grid,
  Icon,
} from './SeoFeaturesElements'

const SeoFeatures = () => {
  return (
    <Section>
      <Container>
        <Content>
          <TitleWrap>
            <h2>What is edge computing?</h2>
          </TitleWrap>
          <GridContainer>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
            <Grid>
              <Icon as={IoSpeedometerOutline} />
              <h3>Interactive learning</h3>
              <p>
                Write real code from day one and get real-time feedback to
                quickly improve code quality.
              </p>
            </Grid>
          </GridContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default SeoFeatures
