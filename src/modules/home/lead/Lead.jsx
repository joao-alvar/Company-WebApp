import {ButtonPrimary} from '@/components/button/ButtonElements'

import {FeaturedSection} from '../featured/FeaturedElements'
import {Container, LeadInformation} from './LeadElements'

const Lead = () => {
  return (
    <>
      <FeaturedSection id="lead">
        <Container>
          <LeadInformation>
            <h2>
              Join 28+ million people who already trust us with their money
            </h2>
            <ButtonPrimary href="/" className="button" data-clog-click>
              Get Started
            </ButtonPrimary>
          </LeadInformation>
        </Container>
      </FeaturedSection>
    </>
  )
}

export default Lead
