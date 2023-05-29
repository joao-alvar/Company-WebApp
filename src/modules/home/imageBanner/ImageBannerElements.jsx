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
  flex-shrink: 0;
  width: 100%;
  height: 65rem;
  line-height: initial;
  /* margin-top: 2pc; */

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    height: auto;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (max-width: 1060px) {
    position: relative;
  }
`

export const Content = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  @media screen and (max-width: 1060px) {
    width: 100%;
    height: 20em;
    // width: 30pc;
    // max-width: 45em;
    padding-right: 2em;
    min-height: auto;
  }
  @media screen and (max-width: 500px) {
    height: auto;
    margin-bottom: 3.5pc;
    flex-wrap: wrap;
    width: 90%;
  }
`

export const TextWrap = styled.div`
  padding-left: 2em;
  margin-top: 9pc;
  width: 70%;
  z-index: 1;

  h2 {
    font-family: var(--font-heading);
    font-size: 3em;
    font-weight: 600;
  }

  p {
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 0.6em;
  }

  @media screen and (max-width: 1060px) {
    width: 100%;
    margin-top: 3pc;
  }
`
