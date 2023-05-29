import {ButtonPrimary} from '@/components/button/ButtonElements'

import {Section} from '../hero/HeroElements'
import {Container, LeadInformation} from './LeadElements'

const Lead = () => {
  return (
    <>
      <Section id="lead">
        <Container>
          <LeadInformation>
            <h2>
              Join 28+ million people who already trust us with their money
            </h2>
            <ButtonPrimary href="/contact" data-clog-click>
              Get started
            </ButtonPrimary>
          </LeadInformation>
        </Container>
      </Section>
    </>
  )
}

export default Lead
