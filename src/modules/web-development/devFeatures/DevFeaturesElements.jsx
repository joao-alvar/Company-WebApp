import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding-top: 3pc;
  padding-bottom: 3pc;
  margin: 0 auto;
  line-height: initial;
  /* background-color: #f4efe8; */

  @media screen and (max-width: 1085px) {
    gap: 2rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding-bottom: 6em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 90%;
  justify-content: space-between;

  @media screen and (max-width: 1085px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    &.content_reverse {
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: auto;
  height: 32rem;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1085px) {
    margin-right: auto;
    margin-top: 4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  padding-right: 7em;
  font-family: var(--font-heading);
  @media screen and (max-width: 1085px) {
    width: 98%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 1em;
    padding-right: 1em;
    font-size: 90%;
  }

  h2 {
    font-size: 3em;
    font-weight: 600;
  }

  p {
    font-size: 1.5em;
    font-weight: 500;
    line-height: 2.5rem;
    padding-top: 0.81em;
  }
`
