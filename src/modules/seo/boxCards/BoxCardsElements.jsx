import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 37rem;
  height: auto;
  margin: 0 auto;
  line-height: initial;
  margin-top: 3pc;
`

export const GridWrap = styled.ul`
  list-style: none;
  height: 100%;
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.3rem;
  grid-auto-rows: minmax(200px, auto);
  padding: 2em;
  @media screen and (max-width: 965px) {
    padding: 1.5em;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Grid = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  border-radius: 1pc;
  padding: 3rem;
  font-family: var(--font-heading);
  font-weight: 600;
  text-align: center;

  h2 {
    font-size: 3.4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.7rem;
    font-weight: 500;
  }

  @media screen and (max-width: 965px) {
    justify-content: center;
    text-align: start;
  }
`
