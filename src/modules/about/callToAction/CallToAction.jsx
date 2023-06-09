import {AboutSection} from '../hero/AboutHeroElements'
import {Container, Content, Title, Icon, Button} from './CallToActionElements'

const AboutCallToAction = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <Title>
            <h2>
              Join us and let&apos;s make a difference that truly matters.
            </h2>
          </Title>
          <Button href="/contact" data-clog-click>
            Get started <Icon />
          </Button>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default AboutCallToAction
