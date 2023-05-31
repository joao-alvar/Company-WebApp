import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 50rem;
  padding: 2rem;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    gap: 2pc;
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  border-radius: 1pc;
  width: 100%;
  min-height: inherit;
  height: auto;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 50%;
  height: 28rem;
  padding-right: 2em;
  padding-left: 3em;
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding: 2rem;
  }

  @media only screen and (max-width: 450px) {
    height: auto;
    padding-bottom: 2pc;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 0.4em;
  }

  p {
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.4em;
    margin-bottom: 2.5rem;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  height: 32rem;
  width: 45%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1pc;
    filter: brightness(60%);
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;

    img {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  @media only screen and (max-width: 450px) {
    img {
      object-fit: fill;
    }
  }
`
