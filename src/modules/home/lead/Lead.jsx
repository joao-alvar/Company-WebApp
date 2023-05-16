import {ButtonPrimary} from '@/components/button/ButtonElements'

import {Section} from '../hero/HeroElements'
import {Container, LeadInformation, Icon} from './LeadElements'

const Lead = () => {
  return (
    <>
      <Section id="lead">
        <Container>
          <LeadInformation>
            <h2>We got you covered</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place
            </p>
            <ButtonPrimary
              href="/"
              isPrimary
              className="button_secondary button"
              data-clog-click
            >
              Get started <Icon />
            </ButtonPrimary>
          </LeadInformation>
        </Container>
      </Section>
    </>
  )
}

export default Lead
