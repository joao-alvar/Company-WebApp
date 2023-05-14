import {ButtonPrimary} from '@/components/button/ButtonElements'
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 8em 0 12em;
  line-height: initial;
`
export const Content = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3.6em;
    padding: 0.9em 2em 0 2em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 90%;
    h2 {
      padding: 0.9em 0.1em 0 0.1em;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    h2 {
      padding: 0.9em 0 0 0;
    }
  }
`

export const Button = styled(ButtonPrimary)`
  position: relative;
  margin-top: 1em;
  padding: 0;
  @media screen and (max-width: 1060px) {
    border: none;
  }
  &:hover {
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 0.6em 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 90%;
  }
`

export const Icon = styled(IoIosArrowForward)`
  position: absolute;
  top: 4px;
  margin-left: 2px;
  font-size: 1em;
`