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
import Advertising from 'public/images/phone-social-media-reactions-image.jpeg'
import Seo from 'public/images/Seo.jpg'
import WebDevelopment from 'public/images/WebDevelopment.jpg'

const LeadList = () => {
  return (
    <Section name="Overview" id="overview">
      <Container>
        <Wrapper>
          <GridContainer>
            <GridItems href="/">
              <ImageWrap>
                <ImageComponent
                  src={Creativity}
                  alt="Computer and design"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Atalaso experience Cloud</h3>
                <h2>End to end. And back again.</h2>
                <p>
                  Experience Cloud products cover your range of customer
                  experience needs.
                </p>
                <Button href="/">
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
            <GridItems href="/">
              <ImageWrap>
                <ImageComponent
                  src={WebDevelopment}
                  alt="Computer and design"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Atalaso experience Cloud</h3>
                <h2>End to end. And back again.</h2>
                <p>
                  Experience Cloud products cover your range of customer
                  experience needs.
                </p>
                <Button href="/">
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
            <GridItems href="/">
              <ImageWrap>
                <ImageComponent
                  src={Advertising}
                  alt="Computer and design"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Atalaso experience Cloud</h3>
                <h2>End to end. And back again.</h2>
                <p>
                  Experience Cloud products cover your range of customer
                  experience needs.
                </p>
                <Button href="/">
                  Learn more <ArrowIcon />
                </Button>
              </Content>
            </GridItems>
          </GridContainer>
          <GridContainer className="two_columns">
            <GridItems as="div" className="background_color">
              <Content className="white_color">
                <h3>Atalaso experience Cloud</h3>
                <h2>End to end. And back again.</h2>
                <p>
                  Experience Cloud products cover your range of customer
                  experience needs.
                </p>
                <ListWrap>
                  <h4>Rethinking your business</h4>
                  <List>
                    <ListItems>UX and UI</ListItems>
                    <ListItems>Intelligent Operating Model</ListItems>
                    <ListItems>Intelligent Operating Model</ListItems>
                    <ListItems>Intelligent Operating Model</ListItems>
                  </List>
                </ListWrap>
                <ListWrap>
                  <h4>Rethinking your business</h4>
                  <List>
                    <ListItems>UX and UI</ListItems>
                    <ListItems>Intelligent Operating Model</ListItems>
                    <ListItems>Intelligent Operating Model</ListItems>
                  </List>
                </ListWrap>
              </Content>
            </GridItems>
            <GridItems href="/">
              <ImageWrap>
                <ImageComponent
                  src={Seo}
                  alt="Computer and design"
                  placeholder="bluer"
                  height="400"
                  className="test"
                />
              </ImageWrap>
              <Content>
                <h3>Atalaso experience Cloud</h3>
                <h2>End to end. And back again.</h2>
                <p>
                  Experience Cloud products cover your range of customer
                  experience needs.
                </p>
                <Button href="/">
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
