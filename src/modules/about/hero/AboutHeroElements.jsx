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
  position: relative;
  width: 98%;
  margin-top: 1em;
  height: 45em;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column-reverse;
  }
`

export const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;
    border-radius: 12px;
    filter: brightness(43%);
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-right: 0;
  }
`

export const Content = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 3em;
  padding-top: 11rem;
  margin: 0 auto;

  h1 {
    font-family: var(--font-heading);
    font-size: 5.4em;
    font-weight: 800;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      #28abe1 15%,
      #ff729f 50%,
      #f18f01 85%
    );
    -webkit-background-clip: text;
    background-clip: text;
    display: inline;
  }

  p {
    font-size: 1.9rem;
    line-height: 1.7em;
    font-weight: 600;
    color: #fff;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2.5em 1em;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.85rem;
    padding-top: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`
