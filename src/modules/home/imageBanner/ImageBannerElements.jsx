import styled from 'styled-components'

export const Section = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 65rem;
  line-height: initial;
  clip-path: inset(0 0 0 0);

  @media screen and (max-width: 768px) {
    align-items: end;
  }
`

export const ImageWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }
`

export const Content = styled.div`
  display: flex;
  width: 40rem;
  height: 30rem;
  justify-content: center;
  margin-left: 3.5pc;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 1pc;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 95%;
    height: auto;
    margin-left: 0;
    margin: 0 auto;
    border-radius: 0;
  }
`

export const TextWrap = styled.div`
  h2 {
    font-family: var(--font-heading);
    font-size: 3em;
    font-weight: 600;
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 0.6em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.45rem;
    }
  }
`
