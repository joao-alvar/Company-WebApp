import Link from 'next/link'
import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 28em;
  line-height: initial;
  background-color: #000;

  @media screen and (max-width: 500px) {
    min-height: auto;
    padding-top: 2.5pc;
    padding-bottom: 1rem;
  }
`

export const Content = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  min-height: inherit;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  // text-align: center;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    font-size: 80%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    text-align: start;
    padding-right: 1em;
  }
`

export const Title = styled.header`
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
    width: 80%;
    // margin: 0 auto;
    color: ${({theme}) => theme.colors.white};

    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      width: 100%;
      line-height: 1.3em;
    }

    @media screen and (max-width: 470px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 335px) {
      font-size: 2.3rem;
    }
  }
`

export const Button = styled(Link)`
  margin-top: 3rem;
  margin-left: 0.45rem;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.colors.white};
  border-radius: 10px;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 2rem;
  transition: all 0.3s;
  width: max-content;
  &:hover {
    text-decoration: none;
    background: ${({theme}) => theme.colors.primaryTextColor};
    border-color: ${({theme}) => theme.colors.primaryTextColor};
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    justify-content: center;
    font-size: 1.5rem;
    width: 100%;
    margin-top: 3rem;
  }
`

export const Icon = styled(HiArrowRight)`
  margin-left: 0.25em;
  font-size: 0.9em;
`
