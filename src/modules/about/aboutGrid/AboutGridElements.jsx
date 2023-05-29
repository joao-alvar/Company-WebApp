import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  min-height: 65em;
  height: auto;
  width: 100%;
  padding-top: 1pc;
  padding-bottom: 1pc;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 45em;
  height: auto;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    gap: 0;
  }
`

export const TitleWrap = styled.div`
  display: block;
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  @media screen and (max-width: 570px) {
    text-align: start;
    padding-left: 0.3rem;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding-left: 1rem;
  }
`

export const GridWrap = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 1.3em;
  grid-auto-rows: minmax(30rem, auto);
  padding-left: 2em;
  padding-right: 2em;

  &.larger_column {
    grid-template-columns: 2fr 1.5fr;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    grid-template-columns: none;

    &.larger_column {
      grid-template-columns: none;
      margin-top: 1.5rem;
    }
  }
`

export const Grid = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1pc;
  overflow: hidden;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  &.grid_first_card,
  &.grid_third_card {
    padding: 2rem;

    h3 {
      font-size: 3rem;
      font-family: var(--font-heading);
      font-weight: 600;
    }

    p {
      text-transform: uppercase;
      font-family: var(--font-heading);
      font-size: 1.3rem;
    }
  }

  &.grid_first_card {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  }

  &.grid_third_card {
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }
`

export const Content = styled.div`
  display: block;
`

export const ImageWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
