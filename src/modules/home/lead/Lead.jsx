import Link from 'next/link'

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
            <Link href="/">
              <button>Get Started</button>
            </Link>
          </LeadInformation>
        </Container>
      </LeadSection>
    </>
  )
}

export default Lead
