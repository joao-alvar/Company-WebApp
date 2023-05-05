import {ButtonPrimary} from '@/components/button/ButtonElements'
import styled from 'styled-components'

import {FeaturedSection} from '../featured/FeaturedElements'

export const LeadSection = styled(FeaturedSection)``

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12em 0 4em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 8em 0 2em;
  }
  @media screen and (max-width: 700px) {
    padding: 2em 0 0;
  }
`

export const LeadInformation = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: 'Inter';
  border-bottom: 2px solid ${({theme}) => theme.colors.primaryTextColor};
  padding-bottom: 8.2em;
  @media screen and (max-width: 700px) {
    border-bottom: none;
  }

  h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 3.6em;
    padding: 0.9em 2em 0 2em;
    margin-bottom: 1em;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      padding: 0.9em 0.2em 0 0.2em;
    }
    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 2.6em;
      letter-spacing: -0.008em;
      line-height: 3pc;
    }
  }

  .button {
    @media screen and (max-width: 700px) {
      width: 90%;
      padding: 0.9em 2em;
    }
  }
`
