import styled from 'styled-components'

import {FeaturedButton} from '../featured/FeaturedElements'

export const LeadSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`

export const LeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 27rem;
  font-weight: 700;
  line-height: initial;
  background: #15141d;
  padding-top: 1em;
  border-bottom: 1px solid ${({theme}) => theme.colors.primaryTextColor};
`

export const LeadContent = styled.h3`
  font-size: 2.2em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  @media screen and (max-width: 500px) {
    padding: 0 1em;
    font-size: 1.8em;
  }
`

export const LeadButton = styled(FeaturedButton)`
  font-size: 1.5em;
  margin-top: 2em;
  background: transparent;
  color: ${({theme}) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.white};
  transition: all 1s ease-in-out;

  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
    border-color: ${({theme}) => theme.colors.primaryTextColor};
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 60%;
  }
`
