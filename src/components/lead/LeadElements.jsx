import styled from 'styled-components'

import theme from '../../styles/Theme'
import {FeaturedSection} from '../featured/FeaturedElements'

export const LeadSection = styled(FeaturedSection)`
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50em;
  margin: 6em 0 4em;
`

export const LeadInformation = styled.div`
  height: 85%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: 'Inter';
  color: ${({theme}) => theme.colors.primaryTextColor};
  border-top: 2px solid ${({theme}) => theme.colors.primaryTextColor};
  border-bottom: 2px solid ${({theme}) => theme.colors.primaryTextColor};

  h2 {
    font-weight: 900;
    font-size: 2.5em;
    text-transform: uppercase;
    padding-top: 0.9em;
  }

  h3 {
    font-weight: 600;
    font-size: 1.5em;
    padding: 2em;
    color: ${({theme}) => theme.colors.secondaryTextColor};
  }

  button {
    padding: 0.8em 1em 0.5em 1em;
    text-transform: uppercase;
    font-size: 1.7em;
    font-weight: 600;
    border: 2px solid ${({theme}) => theme.colors.primaryTextColor};
    &:hover {
      color: ${({theme}) => theme.colors.white};
      background: ${({theme}) => theme.colors.primaryTextColor};
    }
  }
`
