import Link from 'next/link'

import {ButtonPrimary} from '@/components/button/ButtonElements'

import {Container, LeadInformation, LeadSection} from './LeadElements'

const Lead = () => {
  return (
    <>
      <LeadSection id="lead">
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
      </LeadSection>
    </>
  )
}

export default Lead
