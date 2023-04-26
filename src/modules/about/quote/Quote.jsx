import {AboutSection} from '../hero/AboutHeroElements'
import {
  QuoteContainer,
  QuoteIconLeft,
  QuoteIconRight,
  QuoteText,
} from './QuoteElements'

const Quote = () => {
  return (
    <AboutSection>
      <QuoteContainer>
        <QuoteText>
          <div>
            <h2>
              <QuoteIconLeft />
              Coming together is a beginning, staying together is progress, and
              working together is success
              <QuoteIconRight />
            </h2>
          </div>
          <h3>Henry Ford</h3>
        </QuoteText>
      </QuoteContainer>
    </AboutSection>
  )
}

export default Quote
