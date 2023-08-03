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
  padding: 3pc 4rem;
  font-family: var(--font-heading);

  @media screen and (max-width: 500px) {
    padding: 3pc 2rem 2rem;
  }
`
export const TitleWrap = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 1rem;

  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    padding-left: 1.3rem;
    border-left: 3px solid #000000;

    &.mobile {
      display: none;
    }

    @media screen and (max-width: 430px) {
      &.desktop {
        display: none;
      }

      &.mobile {
        display: block;
      }
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
    line-height: 2.2rem;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const GridContainer = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  grid-auto-rows: minmax(160px, auto);
  padding-top: 2em;
  padding-bottom: 2em;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Cards = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-family: var(--font-heading);
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    font-weight: 700;
    line-height: 2.3rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    h3,
    p {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 3rem;
    }
  }
`

export const CardContent = styled.div`
  padding: 3rem;
`
