import {AboutSection} from '../hero/AboutHeroElements'
import {Container, Content, Button, Icon} from './CallToActionElements'

const AboutCallToAction = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <h2>Join 28+ million people who already trust us with their money</h2>
          <Button
            href="/contact"
            isPrimary
            className="button_secondary button"
            data-clog-click
          >
            Get started <Icon />
          </Button>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default AboutCallToAction
