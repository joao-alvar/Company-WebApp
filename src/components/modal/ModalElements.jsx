import {HiArrowLeft} from 'react-icons/hi'

import styled from 'styled-components'

import {ButtonPrimary} from '../button/ButtonElements'

export const ModalContainer = styled.div`
  /* position: fixed; */
  display: none;
  align-items: center;
  z-index: 100;
  justify-content: center;
  min-height: 48em;
  width: 100%;
  flex-shrink: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 3rem;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-bottom: 2.5pc;
  }
  @media screen and (max-width: 754px) {
    height: 60em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    height: auto;
  }

  &.modal {
    &.open {
      display: block;
    }
  }
`

export const ModalContent = styled.div`
  position: relative;
  min-height: 42em;
  height: auto;
  width: 100%;
  top: 0;
  padding: 2em 0;
  border-radius: 1pc;
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
  border-radius: 8px;
  padding-top: 2px;
  z-index: 5;

  &:hover,
  &:focus {
    background-color: #e6e3e3;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    top: 1.5rem;
    left: 1rem;
  }
`

export const ReturnIcon = styled(HiArrowLeft)`
  color: ${({theme}) => theme.colors.black};
  font-size: 2.8em;
  width: 1.4em;
  height: 1.2em;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 50%;

  img {
    object-fit: contain;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
      width: 100%;
      height: 100%;
      background-position: center;
    }
  }

  @media screen and (max-width: 754px) {
    width: 100%;
    height: 100%;
    align-items: start;
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
  font-weight: 600;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    text-align: center;
    width: 80%;
    padding: 0;
    justify-content: start;
  }

  h2 {
    font-size: 4.5rem;
    font-family: var(--font-heading);
    font-weight: 700;
  }
  p {
    font-size: 1.4em;
    font-weight: 600;
    line-height: 2.5rem;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.64rem;
    }
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

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
`
