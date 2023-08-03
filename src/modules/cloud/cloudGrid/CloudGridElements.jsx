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
  padding-top: 6pc;
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
    font-size: 2.6rem;
    font-weight: 600;
    padding-left: 1.3rem;
    border-left: 3px solid #000000;

    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 2.3rem;
    }

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
  grid-auto-rows: minmax(auto, auto);
  padding: 2em;

  @media screen and (max-width: 965px) {
    padding: 1.5em;
    grid-template-columns: none;
  }
`

export const Grid = styled.li`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-family: var(--font-heading);
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 20px 5px #0000001a;

  h3 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
  }

  h4 {
    font-size: 2.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    -webkit-text-fill-color: #0000;
    background: linear-gradient(90deg, #1d3e9a, #3e6ae1 50%);
    background-clip: border-box;
    -webkit-background-clip: text;
    background-clip: text;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }

  &:hover {
    transform: translateY(-8px);
  }
`

export const ImageContainer = styled.div`
  display: block;
  height: 30rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 965px) {
    height: 35rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }
`

export const GridContent = styled.div`
  padding: 3rem;
`
