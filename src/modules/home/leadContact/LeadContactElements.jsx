import Link from 'next/link'

import {ButtonPrimary} from '@/components/button/ButtonElements'
import styled from 'styled-components'

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
  width: 100%;
  height: 45rem;
  min-height: auto;
  line-height: initial;
  padding-bottom: 1em;
  @media screen and (max-width: 800px) {
    height: auto;
    padding-bottom: 4em;
  }
`
export const Card = styled.div`
  display: flex;
  width: 95%;
  height: 75%;
  border-radius: 1pc;
  overflow: hidden;
  border: 1px solid rgba(24, 24, 24, 0.04);
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 2px 8px -2px rgba(24, 24, 24, 0.08),
    0 8px 9pt -2px rgba(106, 87, 87, 0.16);

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  height: 100%;
  margin-left: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 2.5em;
    margin-bottom: 5em;
  }
  @media screen and (max-width: 500px) {
    padding: 2.5em 1.5em;
  }
`

export const Title = styled.header`
  h2 {
    font-size: 2.4em;
    font-family: var(--font-heading);
    font-weight: 600;

    @media screen and (max-width: 800px) {
      margin-top: 0.3em;
    }
  }
`
export const Button = styled(ButtonPrimary)`
  width: 9em;
  margin-right: auto;
  margin-top: 2em;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const LeadButton = styled(Link)`
  margin-top: 1.2em;
  border-radius: 8px;
  padding: 0.6rem 1.3rem;
  text-align: center;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5em;
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

export const ImageWrap = styled.div`
  width: 45%;
  height: 100%;
  align-items: center;
  margin-left: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
