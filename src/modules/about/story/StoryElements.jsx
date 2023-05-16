import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 60rem;
  padding: 4em 0;
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
  padding-left: 3em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 0.5rem;
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
    object-fit: cover;
    border-radius: 12px;
  }
`