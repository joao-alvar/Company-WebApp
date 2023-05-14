import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding-left: 0.2em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 4em;
  padding-right: 4em;
  flex-direction: column;
  color: ${({theme}) => theme.colors.black};

  h1 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-bottom: 0.4em;
  }

  p {
    font-size: 1.3em;
    font-weight: 400;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30em;
  margin-top: 4em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    img {
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
