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
  background: ${({theme}) => theme.colors.black};
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 7em 0;
    height: auto;
  }
`

export const Content = styled.div`
  width: 60%;
  margin: 0 auto;

  p {
    font-size: 1.13em;
    letter-spacing: 0.6px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
  }

  h2 {
    font-size: 4em;
    font-family: var(--font-heading);
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

  h3 {
    font-weight: 600;
    font-size: 1.54em;
    line-height: 1.3em;
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
