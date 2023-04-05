import {BsArrowRightCircle} from 'react-icons/bs'

import styled from 'styled-components'

export const LeadCardSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const LeadCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 70rem;
  margin: 2em 0 4em;
  line-height: initial;

  h2 {
    font-size: 1.9em;
    font-weight: 400;
    color: ${({theme}) => theme.colors.black};
  }
`

export const LeadCardList = styled.ul`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 0.9em;
  margin-top: 3em;
  flex-shrink: 0;

  li {
    position: relative;
    width: calc(33% - 1rem);
    height: 40vw;
    padding: 0;
    margin: 0 0.5rem 1rem;
    border-radius: 10px;
    max-width: 376px;
    max-height: 450px;
    transition: 0.4s ease-in-out;
    overflow: hidden;
    box-shadow: 0px 0.15rem 0.5rem rgba(0, 0, 0, 0.4);
    background: black;

    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      z-index: 1;
      border-radius: 12px;
      filter: brightness(50%);
    }
  }
`

export const LeadCardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: end;
  flex-direction: column;
  font-family: Overpass;
  font-weight: 400;

  h2 {
    color: ${({theme}) => theme.colors.white};
    font-size: 2.6em;
    margin-left: 0.7em;
    margin-bottom: 0.3em;
    font-weight: 300;
    z-index: 1;
  }

  p {
    color: ${({theme}) => theme.colors.white};
    font-size: 1.6em;
    margin-left: 1.17em;
    margin-right: 1.3em;
    z-index: 1;
  }

  button {
    position: relative;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 2em 1.25em;
    margin-bottom: 2em;
    border: 0;
    text-align: left;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1;
  }
`

export const ArrowIcon = styled(BsArrowRightCircle)`
  position: absolute;
  right: 0;
  font-size: 1.3em;
`
