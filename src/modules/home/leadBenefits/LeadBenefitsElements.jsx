import {IoIosArrowForward} from 'react-icons/io'

import styled from 'styled-components'

export const GridSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background-color: ${({theme}) => theme.colors.black};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 95%;
  height: auto;
  margin-top: 2.5pc;
  gap: 2pc;
  padding-top: 2pc;
  padding-bottom: 2pc;
  flex-direction: column;
`

export const GridWrap = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [12];
  grid-template-columns: (3, 1fr);
  grid-column-gap: 2pc;
  -moz-column-gap: 2pc;
  column-gap: 2pc;
  grid-row-gap: 2pc;
  grid-auto-rows: minmax(200px, auto);
  row-gap: 2pc;
  -ms-grid-column: 1;
  -ms-grid-column-span: 12;
  grid-column: 1 / span 12;
  width: 100%;
`

export const Cards = styled.article`
  display: flex;
  align-items: center;
  min-height: 45em;
  height: auto;
  border-radius: 6px;
  overflow: hidden;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;

    &:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 2.8em;
    color: ${({theme}) => theme.colors.white};
  }

  p {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    color: #818c96;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    font-family: var(--font-heading);
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 0.4em;
    width: max-content;
    position: relative;
    &:hover {
      text-decoration: underline;
      color: ${({theme}) => theme.colors.link};
    }
  }
`

export const Icon = styled(IoIosArrowForward)`
  position: absolute;
  top: 4px;
  margin-left: 2px;
  font-size: 0.95em;
`

export const ImageWrap = styled.div`
  display: flex;
  width: 50%;
  height: 65%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1pc;
    object-fit: cover;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 94%;
  }
`
