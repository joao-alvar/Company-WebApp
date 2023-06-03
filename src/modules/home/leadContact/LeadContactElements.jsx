import {LeadButton} from '@/components/button/ButtonElements'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 33em;
  height: auto;
  line-height: initial;
  padding: 10px;
  padding-top: 0;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    min-height: 20em;
  }
`
export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: inherit;
  border-radius: 1pc;
  overflow: hidden;
  background-color: transparent;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 8rem;
  width: 75%;
  height: 100%;
  margin-right: auto;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding: 2.5em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2rem;
    font-size: 80%;
  }
`

export const Title = styled.header`
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};

    @media screen and (max-width: 470px) {
      font-size: 2.5rem;
    }
  }
`
export const Button = styled(LeadButton)`
  font-size: 1.6rem;
  width: 9em;
  margin-right: auto;
  margin-top: 2em;

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
    font-size: 1.5rem;
    margin-top: 4em;
  }
`

export const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-left: auto;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }
`
