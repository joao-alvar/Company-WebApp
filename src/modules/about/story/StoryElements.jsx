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
`

export const Content = styled.div`
  width: 50%;
  padding-right: 2em;
  padding-left: 3em;

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 0.4em;
    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      width: 70%;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1.4em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;

    p {
      padding: 0 1.5em;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    p {
      padding: 0 1em;
      text-align: center;
    }
  }
`

export const ImageWrap = styled.div`
  display: flex;
  width: 45%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`
