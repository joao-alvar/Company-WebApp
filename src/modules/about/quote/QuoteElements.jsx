import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

import styled from 'styled-components'

export const QuoteContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 27rem;
  background: ${({theme}) => theme.colors.primary};
  line-height: initial;
`

export const QuoteText = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({theme}) => theme.colors.white};

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    font-weight: 500;
    font-size: 2em;
  }

  h3 {
    position: relative;
    font-weight: 700;
    font-size: 1.6em;
    text-align: center;
    padding: 0.5em 0 0.41em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    text-align: center;
    width: 80%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 95%;
  }
`

export const QuoteIconLeft = styled(FaQuoteLeft)`
  font-size: 0.61em;
  margin-bottom: 0.41em;
  margin-right: 5px;
`

export const QuoteIconRight = styled(FaQuoteRight)`
  font-size: 0.61em;
  margin-left: 5px;
`
