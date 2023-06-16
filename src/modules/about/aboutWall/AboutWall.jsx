import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'
import {
  LeadContent,
  StyledList,
  List,
} from '@/modules/home/leadWall/LeadWallElements'

import {Container, HeaderWrap, Icon, IconTitle} from './AboutWallElements'

import cogwheels from 'public/images/cogwheels.png'
import ideaLamp from 'public/images/idea-yellow-lamp.png'
import network from 'public/images/network.png'

const AboutWall = () => {
  return (
    <Section>
      <Container>
        <LeadContent>
          <HeaderWrap>
            <header>
              <h2>What we believe</h2>
            </header>
            <h3>
              Accelerating change, Powering creativity and Reimagining
              possibilities.
            </h3>
          </HeaderWrap>
          <StyledList>
            <List>
              <Icon>
                <ImageComponent
                  src={ideaLamp}
                  alt="Idea yellow lamp illustration"
                />
              </Icon>
              <IconTitle>Creativity sparks innovation</IconTitle>
              <p>
                spark new ideas, challenge conventional thinking, and push
                boundaries.
              </p>
            </List>
            <List>
              <Icon>
                <ImageComponent
                  src={network}
                  alt="Neural connections illustration"
                />
              </Icon>
              <IconTitle>Meaningful collaboration</IconTitle>
              <p>
                By fostering an environment that encourages diverse
                perspectives, open communication, and shared goals.
              </p>
            </List>
            <List>
              <Icon className="cogwheels_icon">
                <ImageComponent
                  src={cogwheels}
                  alt="Cogwheels 3d illustration in front of a blue circle"
                />
              </Icon>
              <IconTitle>Continuous improvement</IconTitle>
              <p>
                We believe that progress is not a one-time achievement but a
                journey of constant growth and evolution.
              </p>
            </List>
          </StyledList>
        </LeadContent>
      </Container>
    </Section>
  )
}

export default AboutWall
