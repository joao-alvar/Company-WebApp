import {LeadButton} from '@/components/button/ButtonElements'
import styled from 'styled-components'

export const LeadSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`

export const LeadContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: auto;
  line-height: initial;
  padding-bottom: 2pc;
  @media screen and (max-width: 800px) {
    height: auto;
    padding-bottom: 4em;
  }
`
export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 95%;
  min-height: 33rem;
  border-radius: 1pc;
  overflow: hidden;
  border: 1px solid rgba(24, 24, 24, 0.04);
  background-color: transparent;
  box-shadow: 0 2px 8px -2px rgba(24, 24, 24, 0.08),
    0 8px 9pt -2px rgba(106, 87, 87, 0.16);

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`
export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  height: 100%;
  margin-right: auto;
  padding: 3rem;

  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 2.5em;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
    font-size: 80%;
  }
`

export const Title = styled.header`
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};

    @media screen and (max-width: 800px) {
      margin-top: 0.3em;
    }
  }
`
export const Button = styled(LeadButton)`
  font-size: 1.6rem;
  width: 9em;
  margin-right: auto;
  margin-top: 2em;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.4rem;
    margin-top: auto;
  }
`

export const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-left: auto;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);

    /* @media only screen and (max-width: 1000px) and (min-width: 800px) {
      object-fit: contain;
    } */
  }
`
