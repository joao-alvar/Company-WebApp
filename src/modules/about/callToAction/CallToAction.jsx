import {ButtonPrimary} from '@/components/button/ButtonElements'

import {AboutSection} from '../hero/AboutHeroElements'
import {Container, Content, Icon} from './CallToActionElements'

const AboutCallToAction = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <h2>Join 28+ million people who already trust us with their money</h2>
          <ButtonPrimary href="/contact" className=" button" data-clog-click>
            Get started <Icon />
          </ButtonPrimary>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default AboutCallToAction
