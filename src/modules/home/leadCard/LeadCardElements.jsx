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
  margin: 3em 0 5em;
  line-height: initial;
  @media screen and (max-width: 1010px) {
    height: auto;
    padding: 4em 0 1em;
  }

  h2 {
    font-size: 2.2em;
    font-family: Inter;
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};
    @media screen and (max-width: 1010px) {
      padding: 0 2em;
      text-align: center;
    }
    @media screen and (max-width: 575px) {
      font-size: 2em;
      padding: 0 15px;
    }
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
  @media screen and (max-width: 1010px) {
    flex-direction: column;
  }

  li {
    position: relative;
    width: calc(33% - 1rem);
    height: 40em;
    padding: 0;
    margin: 0 0.5rem 1rem;
    border-radius: 10px;
    max-width: 376px;
    max-height: 450px;
    transition: 0.4s ease-in-out;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 0.15rem 0.5rem rgba(0, 0, 0, 0.4);
    background: black;
    @media screen and (max-width: 1010px) {
      width: 60%;
      max-width: 100%;
      max-height: 100%;
      height: 60em;
    }
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 70em;
    }
    @media screen and (max-width: 510px) {
      width: 100%;
      height: 43em;
    }

    &:hover img {
      -ms-transform: scale(1.05); /* IE 9 */
      -webkit-transform: scale(1.05); /* Safari 3-8 */
      transform: scale(1.05);
    }

    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      background-position: center;
      background-size: cover;
      z-index: 1;
      border-radius: 12px;
      filter: brightness(50%);
      -moz-transition: all 0.7s;
      -webkit-transition: all 0.7s;
      transition: all 0.7s;
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

  h3 {
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
