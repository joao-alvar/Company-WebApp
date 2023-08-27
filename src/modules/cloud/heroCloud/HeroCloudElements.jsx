import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 40rem;
  min-height: 100%;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }
`
export const Wrap = styled.div`
  width: inherit;
  height: inherit;
  min-height: inherit;
  display: flex;

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 70%;
  padding: 3em;
  background-color: #ffffff;
  bottom: 0%;
  left: 3%;

  h1 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 2.9rem;
    margin-bottom: 0.21em;
  }

  p {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    line-height: 1.5em;
    font-weight: 400;
  }

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 52%;
  }

  @media screen and (max-width: 790px) {
    position: relative;
    width: 100%;
    left: 0;

    h1 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.7rem;
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 3em 1.5em;
  }
`

export const ImageWrap = styled.div`
  width: 70%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }

  @media screen and (max-width: 790px) {
    width: 100%;
  }
`
