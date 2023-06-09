import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 37rem;
  height: auto;
  margin: 0 auto;
  line-height: initial;
  padding-top: 3pc;
  padding-bottom: 3pc;
`
export const TitleWrap = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  padding-left: 7rem;
  padding-right: 5rem;

  @media screen and (max-width: 500px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: 4.2rem;
    font-weight: 600;

    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 3.2rem;
    }
  }
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;

  @media screen and (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const GridContainer = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  border: 1px solid #000;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-weight: 500;
  padding: 4rem;
  box-shadow: -6px 6px 0px rgba(0, 0, 0, 0.9);
  transition: all 0.2s ease-in-out;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }

  &:hover {
    box-shadow: -15px 20px 0px rgba(0, 0, 0, 0.9);
    transform: translateY(-4px);
  }
`
