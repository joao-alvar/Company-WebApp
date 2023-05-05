import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 47rem;
  padding: 4em 0 4em;
  line-height: initial;
`

export const Content = styled.div`
  width: 70%;
  padding: 2em 0;

  p {
    font-weight: 400;
    font-size: 1.6em;
    padding: 0 2.5em;
  }

  img {
    margin: 0 auto;
    object-fit: cover;
    background-size: cover;
    background-position: center;
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

export const AboutTitle = styled.h2`
  font-weight: 500;
  font-size: 2.3em;
  margin: 0 auto;
  margin-top: 1em;
  width: 50%;
  text-align: center;
  border-top: 1px solid ${({theme}) => theme.colors.secondary};
  padding: 1em 0 0.41em;

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 70%;
  }
`
