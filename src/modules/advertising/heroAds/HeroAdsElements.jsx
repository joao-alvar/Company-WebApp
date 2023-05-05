import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 57rem;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding: 3em;

  h1 {
    font-family: Inter;
    font-weight: 600;
    font-size: 3.4em;
    margin-bottom: 0.21em;
  }

  p {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 55%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding: 4em;

    p {
      font-size: 1.8em;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 3em 1.5em;
  }
`

export const LinkWrap = styled.div`
  display: flex;
  margin-top: 2.21em;

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  .button {
    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      width: 100%;
    }
  }
`

export const ImageWrap = styled.div`
  width: 50%;
  height: 100%;
  margin-left: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 12px;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: 40em;
    width: 100%;
  }
`
