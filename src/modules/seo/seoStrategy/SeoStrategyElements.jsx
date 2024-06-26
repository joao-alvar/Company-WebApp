import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 30rem;
  padding-top: 3pc;
  padding-bottom: 3pc;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    gap: 2pc;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1rem;
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
    font-size: 4.2rem;
    margin-bottom: 0.4em;

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 550px) {
      font-size: 3.2rem;
    }
  }

  p {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.5rem;
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
    border-radius: 1pc;
    border: 1px solid #0000001f;
  }
`
