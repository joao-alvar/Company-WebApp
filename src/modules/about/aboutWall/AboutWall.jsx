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
              <h2>
                We continually study our platform to understand the real-world
                benefits
              </h2>
            </header>
            <h3>
              Collaborating with top mental health experts, we live our values
              by contributing to mental health knowledge and supporting academic
              research
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
              <IconTitle>Proof with passion</IconTitle>
              <p>
                estimated annual productivity saving per employee experiencing
                low mood or sleep difficulties
              </p>
            </List>
            <List>
              <Icon>
                <ImageComponent
                  src={network}
                  alt="Idea yellow lamp illustration"
                />
              </Icon>
              <IconTitle>Simplicity over complexity</IconTitle>
              <p>of participants reported a reduction in stress levels.</p>
            </List>
            <List>
              <Icon className="cogwheels_icon">
                <ImageComponent
                  src={cogwheels}
                  alt="Idea yellow lamp illustration"
                />
              </Icon>
              <IconTitle>Embracing the human experience</IconTitle>
              <p>
                minutes extra sleep a night for people with sleep difficulties.
              </p>
            </List>
          </StyledList>
        </LeadContent>
      </Container>
    </Section>
  )
}

export default AboutWall
