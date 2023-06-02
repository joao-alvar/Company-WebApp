import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 28em;
  line-height: initial;
  background-color: #000;

  @media screen and (max-width: 500px) {
    min-height: auto;
    padding-top: 2.5pc;
    padding-bottom: 1rem;
  }
`
export const Content = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  min-height: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-right: 8rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    font-size: 80%;
  }

  @media screen and (max-width: 700px) {
    text-align: start;
    padding-right: 1em;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 4.6em;
    padding-bottom: 2rem;
    color: #fff;

    @media screen and (max-width: 700px) {
      font-size: 3.6em;
    }

    @media screen and (max-width: 500px) {
      font-size: 3em;
    }
  }

  .button {
    margin-top: 1em;
    margin-left: 0.45rem;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.white};
    border-radius: 10px;
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 2rem;
    transition: all 0.3s;
    &:hover {
      text-decoration: none;
      background: ${({theme}) => theme.colors.primaryTextColor};
      border-color: ${({theme}) => theme.colors.primaryTextColor};
    }
    @media screen and (max-width: 500px) {
      justify-content: center;
      font-size: 1.5rem;
      width: 95%;
    }
  }
`

export const Icon = styled(HiArrowRight)`
  margin-left: 0.25em;
  font-size: 0.9em;
`
export const ImageWrap = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    filter: brightness(80%);
  }
`
