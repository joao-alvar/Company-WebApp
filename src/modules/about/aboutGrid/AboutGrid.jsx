import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  TitleWrap,
  GridWrap,
  Grid,
  Content,
  ImageWrap,
} from './AboutGridElements'

import buildingImage from 'public/images/building-image.jpg'
import officeImage from 'public/images/office-walking.jpg'

const AboutGrid = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TitleWrap>
            <h2>Help us write the next chapter.</h2>
          </TitleWrap>
          <GridWrap>
            <Grid className="grid_first_card">
              <Content>
                <p>Atalaso experience</p>
                <h3>
                  This is where we do the extraordinary, where individual
                  imaginations converge, united by a shared commitment to the
                  values that drive exceptional work. Here, is not just a place
                  to join, but a place where you will contribute and make a
                  lasting impact.
                </h3>
              </Content>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent
                  src={officeImage}
                  alt="People in office moving really fast"
                />
              </ImageWrap>
            </Grid>
          </GridWrap>
          <GridWrap className="larger_column">
            <Grid>
              <ImageWrap>
                <ImageComponent
                  src={buildingImage}
                  alt="Tall glass buildings"
                />
              </ImageWrap>
            </Grid>
            <Grid className="grid_third_card">
              <Content>
                <p>Our purpose</p>
                <h3>
                  Build a significant different life. Embrace innovation
                  wholeheartedly, ignite our creative sparks, and strive to be
                  the catalysts of change. Together, let us harness the power of
                  innovation to shape a brighter and more prosperous future for
                  ourselves and generations to come.
                </h3>
              </Content>
            </Grid>
          </GridWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AboutGrid
