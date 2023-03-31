import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

import styled from 'styled-components'

export const AboutSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`
export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 47rem;
  font-weight: 700;
  line-height: initial;
`

export const MemoirWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const MemoirContentLeft = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }
`

export const MemoirContentRight = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  user-select: none;

  h1 {
    font-weight: 700;
    font-size: 2.3em;
  }

  p {
    font-weight: 600;
    font-size: 1.8em;
    margin: 0 2.5em;
  }
`

export const MissionWrap = styled.div`
  height: 80%;
  width: 60%;

  p {
    font-weight: 400;
    font-size: 1.6em;
    margin: 0 2.5em;
  }
`

export const AboutLead = styled.div`
  height: 100%;
  width: 60%;
  margin-bottom: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.6em;
    font-weight: 400;
    margin: 0 2.5em;
  }

  img {
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }
`

export const AboutTitle = styled.h2`
  font-weight: 500;
  font-size: 2.3em;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  border-top: 1px solid ${({theme}) => theme.colors.secondary};
  padding: 1em 0 0.41em;
`
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

  p {
    position: relative;
    font-weight: 700;
    font-size: 1.6em;
    text-align: center;
    padding: 0.5em 0 0.41em;
  }
`

export const QuoteIconLeft = styled(FaQuoteLeft)`
  font-size: 1.6em;
  margin-bottom: 1.1em;
  margin-right: 5px;
`

export const QuoteIconRight = styled(FaQuoteRight)`
  font-size: 1.6em;
  margin-top: 1.4em;
  margin-left: 5px;
`
