import styled from 'styled-components'

import {HeroBtn} from '@/modules/home/hero/HeroElements'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 57rem;
  line-height: initial;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: aqua; */
  align-items: center;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3em;
  pointer-events: none;
`

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
  gap: 0.8em;
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    text-align: center;
    padding: 0 2em;
  }

  h1 {
    font-size: 2em;
    /* display: none; */
  }

  p {
    font-family: Overpass;
    font-weight: 600;
    font-size: 1.4em;
    /* margin-top: 0.2em; */
    margin-bottom: 0.5em;
  }
`

export const Button = styled(HeroBtn)`

`
