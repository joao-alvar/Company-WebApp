import styled from 'styled-components'

import theme from '../../styles/Theme'
import { NavBtnLink } from '../navbar/NavbarElements'

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
  background: ${({theme}) => theme.colors.black};
`

export const LeadContent = styled.h3`
  font-size: 2.2em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
`

export const LeadButton = styled(NavBtnLink)`
  font-size: 1.5em;
  margin-top: 2em;

  &:hover {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
  }
`
