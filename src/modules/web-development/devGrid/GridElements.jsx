import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
    padding: 2em 0;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  margin: 2em;

  h2 {
    font-size: 5.2rem;
    font-weight: 600;
    @media screen and (max-width: 700px) {
      font-size: 4rem;
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
  padding: 1em;
  cursor: default;

  h3 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.6em;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.2em;
    font-weight: 500;
  }
`
export const Icon = styled.span`
  color: #000;
  font-size: 5em;
`
