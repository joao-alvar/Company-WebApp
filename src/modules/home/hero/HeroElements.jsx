import {AiOutlineArrowRight} from 'react-icons/ai'

import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 45rem;
  line-height: initial;
`

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
`

export const TypeContainer = styled.div`
  height: 6em;
  width: auto;

  .typedText {
    font-family: 'Inter';
    font-size: 4em;
  }
`

export const HeroText = styled.h1`
  font-size: 2em;
  margin-bottom: 0.41em;
`

export const ArrowIcon = styled(AiOutlineArrowRight)`
  transform: translateY(2px);
`
