import {HiArrowLeft} from 'react-icons/hi'

import styled from 'styled-components'

import {ButtonPrimary} from '../button/ButtonElements'
export const ModalContainer = styled.div`
  /* position: fixed; */
  display: none;
  align-items: center;
  z-index: 9000;
  justify-content: center;
  min-height: 48em;
  width: 100%;
  flex-shrink: 0;
  background-color: #f2f2f2;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 4em 0;
  }
  @media screen and (max-width: 754px) {
    height: 60em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    height: auto;
  }
`

export const ModalContent = styled.div`
  position: relative;
  min-height: 42em;
  height: auto;
  width: 90%;
  top: 0;
  padding: 2em 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 754px) {
    height: 100%;
  }
`

export const ModalButtonReturn = styled.button`
  position: absolute;
  text-decoration: none;
  outline: none;
  left: 2em;
  top: 2em;
`

export const ReturnIcon = styled(HiArrowLeft)`
  color: ${({theme}) => theme.colors.black};
  font-size: 2.8em;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 50%;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    .desktop {
      display: none;
    }
  }
  img {
    object-fit: contain;
  }
  @media screen and (max-width: 754px) {
    width: 90%;
    height: 100%;
    align-items: start;
    img {
      object-fit: cover;
      background-position: center;
    }
  }
  @media screen and (min-width: 911px) {
    .mobile {
      display: none;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    img {
      object-fit: contain;
    }
  }
`

export const TextContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2.5em;
  padding-right: 4em;
  gap: 0.8em;
  color: ${({theme}) => theme.colors.black};
  font-family: Overpass;
  font-weight: 600;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    text-align: center;
    width: 80%;
    padding: 0;
    justify-content: start;
  }

  h2 {
    font-size: 3em;
  }
  p {
    font-size: 1.3em;
  }
`

export const ButtonModal = styled(ButtonPrimary)`
  width: fit-content;
  padding: 0.3em 1.1em;
  line-height: 24px;
  margin-top: 0.8em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    margin: 0 auto;
    margin-top: 1em;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }
`
