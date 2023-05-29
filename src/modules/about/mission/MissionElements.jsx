import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 55rem;
  padding-top: 2pc;
  padding-bottom: 3pc;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    gap: 2pc;
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const Content = styled.div`
  width: 50%;
  padding-right: 2em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 0.4em;
  }

  p {
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1.4em;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  width: 45%;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1pc;
  }
`
