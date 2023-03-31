import Link from 'next/link'

import {Container, LeadInformation, LeadSection} from './LeadElements'

const Lead = () => {
  return (
    <>
      <LeadSection id="lead">
        <Container>
          <LeadInformation>
            <h2>Lorem ipsum, dolor sit amet</h2>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. At odit culpa
              molestias pariatur esse itaque soluta quaerat eligendi
            </h3>
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
