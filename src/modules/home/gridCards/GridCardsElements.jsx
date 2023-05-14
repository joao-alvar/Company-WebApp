import {IoIosArrowForward} from 'react-icons/io'

import styled from 'styled-components'

export const GridSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  @media screen and (max-width: 1210px) {
    /* width: 92%; */
    height: auto;
  }
  @media screen and (max-width: 768px) {
    margin-top: 7em;
  }
  @media screen and (max-width: 700px) {
    padding-bottom: 10em;
  }

  // Card one
  .card_image_one {
    /* border-top-right-radius: 1.5pc;
    border-bottom-right-radius: 1.5pc; */
    background-color: ${({theme}) => theme.colors.medium};
  }

  // Card two
  .card_image_two {
    /* border-top-left-radius: 1.5pc;
    border-bottom-left-radius: 1.5pc; */
    background-color: #d9afd9;
    background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  }
`

export const TitleWrap = styled.header`
  h2 {
    font-family: var(--font-heading);
    font-size: 3.4em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1pc;
    color: ${({theme}) => theme.colors.white};
  }
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
  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Cards = styled.article`
  display: flex;
  align-items: center;
  height: 35em;
  border-radius: 6px;
  overflow: hidden;
`

export const CardContent = styled.div`
  display: flex;
  width: 50%;
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
    }
  }
`

export const Icon = styled(IoIosArrowForward)`
  position: absolute;
  top: 3px;
  margin-left: 2px;
  font-size: 0.95em;
`

export const ImageWrap = styled.div`
  display: flex;
  width: 50%;
  height: 80%;
  margin: 0 auto;
  border-radius: 1.5pc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
