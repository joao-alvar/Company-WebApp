import Link from 'next/link'

import {AboutSection} from '../hero/AboutHeroElements'
import {Container, Content, Button} from './CallToActionElements'

const AboutWall = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <h2>Join 28+ million people who already trust us with their money</h2>
          <Button>
            <Link href="/contact">Get Started</Link>
          </Button>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default AboutWall
