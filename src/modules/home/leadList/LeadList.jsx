import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '../hero/HeroElements'
import {
  Container,
  GridContainer,
  GridItems,
  Wrapper,
  Content,
  Button,
  ArrowIcon,
  ImageWrap,
  ListWrap,
  List,
  ListItems,
} from './LeadListElements'

import Creativity from 'public/images/Creativity.jpg'
import Advertising from 'public/images/phone-social-media-reactions-image.jpg'
import Seo from 'public/images/Seo.jpg'
import WebDevelopment from 'public/images/WebDevelopment.jpg'

const LeadList = () => {
  return (
    <Section name="Overview" id="overview">
      <Container>
        <Wrapper>
          <GridContainer>
            <GridItems href="/about">
              <ImageWrap>
                <ImageComponent
                  src={Creativity}
                  alt="Art gallery full of people projecting Van Gogh self-portrait onto the wall"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>innovative center</h3>
                <h2>Innovation amplified.</h2>
                <p>
                  Driving breakthroughs and transforming industries with bold
                  ideas.
                </p>
                <Button>
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
            <GridItems href="/web-development">
              <ImageWrap>
                <ImageComponent
                  src={WebDevelopment}
                  alt="A computer displaying app designs on it"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Atalaso experience</h3>
                <h2>Develop. Transform and Scale.</h2>
                <p>New possibilities with strategic development initiatives.</p>
                <Button>
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
            <GridItems href="/advertising">
              <ImageWrap>
                <ImageComponent
                  src={Advertising}
                  alt="3d illustration of a cellphone social media icons and reactions floating"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Strategic Advertising</h3>
                <h2>Amplify your reach, empowering growth</h2>
                <p>Connect, engage, and drive remarkable results.</p>
                <Button href="/">
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
          </GridContainer>
          <GridContainer className="two_columns">
            <GridItems as="div" className="background_color">
              <Content className="white_color">
                <h3>Focused on your growth</h3>
                <h2>Solutions designed for your unique challenges.</h2>
                <ListWrap>
                  <h4>Reimagine your business</h4>
                  <List>
                    <ListItems>UX and UI</ListItems>
                    <ListItems>Strategic planning</ListItems>
                    <ListItems>Build to last</ListItems>
                    <ListItems>
                      Innovative and adaptable operating model
                    </ListItems>
                  </List>
                </ListWrap>
                <ListWrap>
                  <h4>The value we bring</h4>
                  <List>
                    <ListItems>Prioritizing our clients needs</ListItems>
                    <ListItems>Fast. Objective and Scalable</ListItems>
                    <ListItems>
                      Custom solutions because each case is unique
                    </ListItems>
                    <ListItems>
                      Streamline your business processes, with focus in Speed
                      and Agility
                    </ListItems>
                  </List>
                </ListWrap>
              </Content>
            </GridItems>
            <GridItems href="/solutions/seo">
              <ImageWrap>
                <ImageComponent
                  src={Seo}
                  alt="Cellphone screen showing applications icons"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Organic sales</h3>
                <h2>Scale with strategic optimization.</h2>
                <p>
                  Maximize visibility, boost traffic, and dominate your
                  industry.
                </p>
                <Button>
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
          </GridContainer>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default LeadList
