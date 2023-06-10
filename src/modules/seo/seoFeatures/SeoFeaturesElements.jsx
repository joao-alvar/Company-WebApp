import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 37rem;
  background-color: ${({theme}) => theme.colors.black};
  height: auto;
  margin: 0 auto;
  line-height: initial;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 5rem 3rem;
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const TitleWrap = styled.header`
  display: block;
  margin-bottom: 1rem;

  h2 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 3.8rem;

    @media screen and (max-width: 492px) {
      font-size: 3.4rem;
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: 342px) {
      font-size: 3.1rem;
    }
  }
`

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.9rem;
  grid-auto-rows: minmax(230px, auto);
  padding-top: 2em;
  padding-bottom: 2em;
  margin-top: 3rem;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 1.5em;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Grid = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  /* padding: 1em; */
  cursor: default;

  h3 {
    font-weight: 700;
    font-size: 2.6rem;
    padding-top: 10px;
    padding-bottom: 0.4rem;
  }

  p {
    font-size: 1.3em;
    font-weight: 600;
    line-height: 2.4rem;
  }

  @media screen and (max-width: 455px) {
    h3 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.45rem;
    }
  }
`
export const ImageWrap = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Icon = styled.div`
  color: ${({theme}) => theme.colors.white};
  font-size: 4.5rem;
`
