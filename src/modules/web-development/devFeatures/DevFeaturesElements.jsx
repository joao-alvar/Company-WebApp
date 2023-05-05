import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 90%;
  height: auto;
  padding: 4em 0 8em;
  margin: 0 auto;
  line-height: initial;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    .content_reverse {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 0 0 6em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
`

export const ImageContainer = styled.div`
  display: flex;

  img {
    object-fit: cover;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    img {
      object-fit: contain;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  padding-right: 7em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 98%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 0;
    text-align: center;
  }

  h2 {
    font-size: 3em;
    font-family: Inter;
    font-weight: 600;
  }

  p {
    font-size: 1.6em;
    font-weight: 600;
    color: #24292f;
    padding-top: 0.81em;
  }
`
