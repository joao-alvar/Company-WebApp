import Link from 'next/link'
import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: 80em;
  height: auto;
  width: 100%;
  padding-top: 2pc;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GridContainer = styled.ul`
  margin: 0 auto;
  height: 80%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  grid-auto-rows: minmax(50rem);
  padding: 1.5em 3em;
  @media screen and (max-width: 1005px) {
    padding: 1.5em;
    grid-template-columns: none;
    grid-auto-rows: minmax(auto);
  }

  &.two_columns {
    grid-template-columns: 2.1fr 1fr;

    @media screen and (max-width: 1005px) {
      grid-template-columns: none;
    }
  }
`

export const GridItems = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({theme}) => theme.colors.white};
  border: 1px solid rgb(204, 204, 204);
  color: ${({theme}) => theme.colors.black};

  &.background_color {
    background: ${({theme}) => theme.colors.black};
    /* background-image: radial-gradient(
      circle farthest-corner at 17.1% 22.8%,
      rgba(160, 6, 6, 1) 20%,
      rgba(226, 24, 24, 1) 90%
    ); */
  }
`

export const ImageWrap = styled.div`
  display: block;
  height: 45%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.div`
  height: 55%;
  width: 100%;
  font-family: var(--font-heading);
  font-weight: 600;
  padding: 1rem;
  padding-top: 2.5rem;

  &.white_color {
    color: ${({theme}) => theme.colors.white};
  }

  h2 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.7rem;
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    height: auto;
  }
`

export const ListWrap = styled.div`
  display: block;
  margin-top: 2rem;
  margin-bottom: 1rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid ${({theme}) => theme.colors.white};
`

export const ListItems = styled.div`
  font-size: 1.4rem;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  text-decoration: none;
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`

export const ArrowIcon = styled(HiArrowRight)`
  margin-left: 0.25em;
  margin-top: 2px;
  font-size: 0.9em;
`
