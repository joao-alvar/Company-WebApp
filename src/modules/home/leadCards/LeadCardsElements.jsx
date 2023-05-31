import Image from 'next/image'
import {BsGraphUpArrow} from 'react-icons/bs'
import {GiShakingHands} from 'react-icons/gi'

import styled from 'styled-components'

export const Section = styled.section`
  height: auto;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

export const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  min-height: 48em;
  height: auto;
  padding: 3pc 8em;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    padding-right: 2em;
    padding-left: 2em;
  }
`

export const TitleWrap = styled.header`
  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3.84em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 85%;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2pc;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
  }
`

export const TextWrap = styled.div`
  width: 50%;
  padding-right: 6em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  p {
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.5em;
  }
`

export const ListWrap = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    margin-top: 1.5pc;
  }
`

export const Cards = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1.5em;
  padding: 2em;
  height: auto;
  width: 100%;
  border-radius: 1pc;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: ${({theme}) => theme.colors.white};
  @media screen and (max-width: 460px) {
    align-items: start;
  }

  p {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.4em;
    line-height: 1.5em;
    flex-wrap: wrap;
  }
`

export const IconContainer = styled.div`
  min-height: 5em;
  min-width: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.black};
  border-radius: 1pc;
  overflow: hidden;
  color: ${({theme}) => theme.colors.white};
`

export const HandsIcon = styled(GiShakingHands)`
  font-size: 4em;
`

export const GraphUpIcon = styled(BsGraphUpArrow)`
  font-size: 3em;
`

export const IconSvg = styled(Image)`
  width: 5em;
  height: 3em;
  margin: 0 auto;
`
