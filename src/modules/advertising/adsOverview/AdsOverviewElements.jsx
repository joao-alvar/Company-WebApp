import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 3pc 2em;
  line-height: initial;
  gap: 1.5em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    padding-top: 1pc;
    padding-bottom: 1pc;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2pc 10px;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4em;
  gap: 1.2em;

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2em 1.5em;
  }
`

export const TextWrap = styled.div`
  h3 {
    font-family: var(--font-heading);
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }

  h2 {
    font-size: 3.8rem;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.65rem;
    font-weight: 500;
    font-family: var(--font-heading);
    line-height: 1.6em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    h2 {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 560px) {
    h2 {
      font-size: 3.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 3rem;
    }
  }
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1pc;
  height: 100%;
`

export const GridListed = styled.ul`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  grid-column-gap: 2.5rem;
  grid-row-gap: 3.5rem;
  grid-template-rows: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 1016px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const List = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
`
export const Text = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
  padding-bottom: 0.5rem;

  h4 {
    font-size: 1.6em;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.3em;
    font-family: var(--font-heading);
    line-height: 2.4rem;
    font-weight: 400;
  }
`

export const ImageWrap = styled.div`
  width: 30px;
  height: 30px;
  flex: none;
  display: block;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`
