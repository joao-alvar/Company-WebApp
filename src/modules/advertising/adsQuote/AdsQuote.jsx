import {
  QuoteContainer,
  QuoteText,
  QuoteIconLeft,
  QuoteIconRight,
} from '@/modules/about/quote/QuoteElements'
import {Section} from '@/modules/home/hero/HeroElements'

import {Container} from './AdsQuoteElements'

const AdsQuote = () => {
  return (
    <Section>
      <Container>
        <QuoteContainer>
          <QuoteText>
            <div>
              <QuoteIconLeft />

              <h2>Without publicity there is no prosperity</h2>
              <QuoteIconRight />
            </div>
            <h3>Yakov Borisovich Zel&apos;dovich</h3>
          </QuoteText>
        </QuoteContainer>
      </Container>
    </Section>
  )
}

export default AdsQuote
