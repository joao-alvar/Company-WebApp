import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 8em 0;
  line-height: initial;
  background-color: ${({theme}) => theme.colors.black};
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  flex-direction: column;
  color: ${({theme}) => theme.colors.white};
`
export const Title = styled.h2`
  font-weight: 800;
  font-size: 4.8rem;
  font-family: var(--font-heading);
  padding-left: 2rem;
  padding-bottom: 1.6em;
  text-align: center;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    text-align: start;
    padding-right: 2rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 2.6em;
  }

  @media screen and (max-width: 435px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 353px) {
    font-size: 2.3rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  align-items: start;
  justify-items: start;
  grid-column-gap: 7rem;
  grid-row-gap: 4.5rem;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    grid-template-columns: none;
  }
`

export const GridContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 100%;
  padding: 2em;
  gap: 1.2em;

  h3 {
    font-size: 3.2em;
    font-family: var(--font-heading);
    font-weight: 800;
    padding-right: 3rem;
  }

  p {
    font-size: 1.6em;
    line-height: 1.5em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 80%;

    h3 {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 435px) {
    h3 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 353px) {
    h3 {
      font-size: 2.1rem;
    }
  }

  /* @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    font-size: 75%;
  } */
`

export const ImageWrap = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`
