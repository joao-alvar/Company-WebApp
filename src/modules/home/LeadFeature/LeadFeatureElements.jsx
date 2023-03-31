import Image from 'next/image'
import {BsGraphUpArrow} from 'react-icons/bs'
import {GiShakingHands} from 'react-icons/gi'

import styled from 'styled-components'

export const LeadFeatureSection = styled.section`
  height: auto;
  width: 100%;
  position: relative;
`

export const LeadFeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 22em;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.primary};
`

export const LeadFeatureContent = styled.div`
  ul {
    display: flex;
    gap: 2em;
  }

  li {
    padding: 2em;
    text-align: center;
    gap: 2em;
  }

  h2 {
    margin-bottom: 0.4em;
    font-weight: 700;
    font-size: 1.8em;
  }

  p {
    font-weight: 600;
    font-size: 1.4em;
  }
`

export const IconContainer = styled.div`
  height: 7em;
`

export const HandsIcon = styled(GiShakingHands)`
  font-size: 6em;
`

export const GraphUpIcon = styled(BsGraphUpArrow)`
  font-size: 4.5em;
`

export const IconSvg = styled(Image)`
  width: 5em;
  height: 4.5em;
  margin: 0 auto;
`
