import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0;
  line-height: initial;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 4pc;

  @media screen and (max-width: 1080px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 2.5pc;
  }
`

export const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.8rem;
  font-weight: 600;
  padding-bottom: 1.8rem;
  width: 100%;
  margin: 0 auto;
  padding-right: 1rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 2rem;
  }

  @media only screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 3rem;
    width: 100%;
    padding-top: 0;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.8rem;
    padding-right: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1500px;
  width: 100%;
  height: auto;
  gap: 3rem;

  @media screen and (max-width: 1080px) {
    padding-bottom: 1pc;
    flex-direction: column;
  }
`

export const ImageWrap = styled.div`
  display: block;
  width: 50%;
  height: auto;
  min-height: 33rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1pc;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    min-height: auto;
  }
`

export const Content = styled.div`
  width: 50%;
  height: auto;

  p {
    font-size: 1.55rem;
    line-height: 2.5rem;
    font-weight: 400;
    font-family: var(--font-heading);
    margin-bottom: 1.2rem;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`
