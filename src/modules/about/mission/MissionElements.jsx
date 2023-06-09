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
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: center;
  margin: 0 auto;

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
  font-family: var(--font-heading);

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  h2 {
    font-weight: ${({theme}) => theme.values.secondaryWeight};
    font-size: ${({theme}) => theme.values.headerFontSize};
    margin-bottom: 0.4em;

    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.5em;
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
