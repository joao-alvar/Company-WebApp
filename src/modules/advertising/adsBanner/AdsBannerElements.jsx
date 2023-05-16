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
    padding: 5em 2em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 5em 10px;
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
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }

  h2 {
    font-size: 4.2em;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.4em;
    font-weight: 500;
    font-family: var(--font-heading);
    line-height: 1.6em;
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

  @media screen and (max-width: 768px) {
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
    font-weight: 400;
  }
`

export const Icon = styled.span`
  font-size: 1.8em;
  color: ${({theme}) => theme.colors.black};
  flex: none;
  align-self: flex-start;
  margin-right: 1rem;
`
