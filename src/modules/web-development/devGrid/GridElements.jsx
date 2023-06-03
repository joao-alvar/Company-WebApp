import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 70rem;
  line-height: initial;
  padding-top: 1pc;
  padding-bottom: 2pc;

  @media screen and (max-width: 1000px) {
    padding-top: 2em;
    padding-bottom: 2em;
  }
`

export const TitleContainer = styled.div`
  padding-left: 3em;
  padding-right: 2rem;
  padding-top: 3em;

  h2 {
    font-size: 5.2rem;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    padding-left: 2rem;
    h2 {
      font-size: 3.5rem;
    }
  }
`

export const Wrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3em;
  grid-auto-rows: minmax(200px, auto);
  padding: 2em;

  @media screen and (max-width: 1050px) {
    padding: 1.5em;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Grid = styled.li`
  display: flex;
  flex-direction: column;
  font-family: var(--font-heading);
  padding: 1em;
  cursor: default;

  h3 {
    font-weight: 600;
    font-size: 1.6em;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
  }

  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`
export const Icon = styled.span`
  color: #000;
  font-size: 5em;
`
