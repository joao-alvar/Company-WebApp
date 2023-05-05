import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 47rem;
  line-height: initial;
  background: ${({theme}) => theme.colors.tertiary};
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 7em 0;
    height: auto;
  }
`

export const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  span {
    font-size: 1.2em;
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
  }

  h2 {
    font-size: 4em;
    font-family: Inter;
    margin-bottom: 0.4em;
    background: -webkit-linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.6em;
    font-family: Overpass;
    color: ${({theme}) => theme.colors.white};
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 90%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 99%;
    padding: 1em;
  }
`
