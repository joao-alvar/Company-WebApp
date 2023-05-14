import styled from 'styled-components'

export const AboutSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`
export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  line-height: initial;
`

export const Wrapper = styled.div`
  width: 98%;
  margin-top: 1em;
  height: 45em;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column-reverse;
  }
`

export const ImageWrap = styled.div`
  width: 48%;
  height: 60%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;
    border-radius: 12px;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 3em;
  user-select: none;

  h1 {
    font-family: var(--font-heading);
    font-size: 3.4em;
    font-weight: 600;
  }

  p {
    font-size: 1.4em;
    line-height: 1.7em;
    font-weight: 600;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2.5em 1em;
  }
`
