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

import buildingImage from 'public/images/building-image.jpeg'
import officeImage from 'public/images/office-walking.jpeg'

const AboutGrid = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TitleWrap>
            <h2>
              We&apos;re just getting started. Help us write the next chapter.
            </h2>
          </TitleWrap>
          <GridWrap>
            <Grid className="grid_first_card">
              <Content>
                <p>Our mission</p>
                <h3>
                  To unlock the growth potential of professionals and businesses
                  with a modern end-to-end revenue operating system.
                </h3>
              </Content>
            </Grid>
            <Grid>
              <ImageWrap>
                <ImageComponent src={officeImage} alt="" />
              </ImageWrap>
            </Grid>
          </GridWrap>
          <GridWrap className="larger_column">
            <Grid>
              <ImageWrap>
                <ImageComponent src={buildingImage} alt="" />
              </ImageWrap>
            </Grid>
            <Grid className="grid_third_card">
              <Content>
                <p>Our mission</p>
                <h3>
                  To unlock the growth potential of professionals and businesses
                  with a modern end-to-end revenue operating system.
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
