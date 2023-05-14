import {ButtonPrimary} from '@/components/button/ButtonElements'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 30em;
  min-height: 100%;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0;
  margin-bottom: 3em;
  line-height: initial;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: ${({theme}) => theme.colors.white};
    width: 90%;
    border-radius: 18px;
    margin: 0 auto;
  }
`

export const ContentWrap = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5em;
  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    padding: 0 2em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    align-items: start;
    padding: 2em;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 2.8em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    h2 {
      font-size: 2.2em;
    }
  }
`

export const ImageWrap = styled.div`
  display: flex;
  width: 55%;
  align-items: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    justify-content: end;
    padding: 2em;

    img {
      width: 100%;
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }
`

export const Button = styled(ButtonPrimary)`
  margin-right: auto;
  margin-top: 1em;
  font-size: 1.4em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.3em;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
  }
`
