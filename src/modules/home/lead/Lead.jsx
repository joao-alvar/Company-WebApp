import Link from 'next/link'

import {Button, Container, LeadInformation, LeadSection} from './LeadElements'

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
              <Button>Get Started</Button>
            </Link>
          </LeadInformation>
        </Container>
      </LeadSection>
    </>
  )
}

export default Lead
