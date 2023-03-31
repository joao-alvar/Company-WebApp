import {
  LeadContainer,
  LeadSection,
  LeadContent,
  LeadButton,
} from './LeadContactElements'

const LeadContact = () => {
  return (
    <div>
      <LeadSection>
        <LeadContainer>
          <LeadContent>Is only the beginning of your growth</LeadContent>
          <LeadContent>Enjoy the journey!</LeadContent>
          <LeadButton href="/contact-us">Start Now</LeadButton>
        </LeadContainer>
      </LeadSection>
    </div>
  )
}

export default LeadContact
