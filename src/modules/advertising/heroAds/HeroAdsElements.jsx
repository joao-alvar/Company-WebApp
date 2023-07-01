import {
  ButtonPrimary,
  ButtonSecondary,
} from '@/components/button/ButtonElements'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 54rem;
  min-height: 100%;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding: 3em;

  h1 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 4.3rem;
    margin-bottom: 0.21em;
  }

  p {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    line-height: 1.5em;
    font-weight: 400;
  }

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 55%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding: 4em;

    p {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 3em 1.5em;
  }
`

export const LinkWrap = styled.div`
  display: block;
  margin-top: 2.21em;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1em;
  }
`

export const Button = styled(ButtonPrimary)`
  text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const SecondButton = styled(ButtonSecondary)`
  margin-left: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    border: 2px solid ${({theme}) => theme.colors.black};

    &:hover {
      text-decoration: none;
    }
  }
`

export const VideoWrap = styled.div`
  width: 50%;
  height: 100%;
  margin-left: auto;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 1pc;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: 40em;
    width: 100%;

    img,
    video {
      border-bottom-left-radius: 0;
    }
  }
`
