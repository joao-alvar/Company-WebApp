import styled from 'styled-components'

export const AboutSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`
export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  line-height: initial;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column-reverse;
  }
`

export const ImageWrap = styled.div`
  width: 55%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    border-bottom-right-radius: 12px;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 3em;
  user-select: none;

  h1 {
    font-family: Inter;
    font-weight: 600;
    font-size: 2.3em;
  }

  p {
    font-weight: 400;
    font-size: 1.6em;
    /* margin: 0 2.5em; */
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2.5em 1em;
  }
`
