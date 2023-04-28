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
            <Button>
              <Link href="/">Get Started</Link>
            </Button>
          </LeadInformation>
        </Container>
      </LeadSection>
    </>
  )
}

export default Lead
