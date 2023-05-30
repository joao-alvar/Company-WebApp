import Link from 'next/link'

import {ButtonPrimary} from '@/components/button/ButtonElements'
import styled from 'styled-components'

export const Header = styled.header`
  background-color: rgb(241, 242, 244);
  border-bottom: 1px solid rgb(223, 227, 231);
  position: fixed;
  top: 0px;
  width: 100%;
  height: var(--nav-header-height);
  z-index: 2;
`

export const Nav = styled.nav`
  -moz-box-align: center;
  align-items: center;
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  position: relative;
  -moz-box-pack: justify;
  justify-content: space-between;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;

  /* &.open {
    height: 100%;
    display: flex;
  } */
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  /* @media screen and (max-width: ${({theme}) => theme.size.md}) {
    position: absolute;
    top: 0;
    left: 0;
  } */
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font: inherit;
  flex-shrink: 0;
  min-width: 0px;
  z-index: 10;
`

export const NavItemsWrap = styled.nav`
  display: grid;
  width: 100%;
  -moz-box-align: center;
  align-items: center;
  column-gap: 1rem;
  transition: 0.2s ease-in-out;
  grid-template-columns: 1fr auto auto;
  margin-left: 3rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding-top: 9.5em;
    flex-direction: column;
    background: ${({theme}) => theme.colors.white};
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
      visibility 0.32s step-end 80ms;

    &.open {
      display: flex;
      height: 100%;
      opacity: 1;
      visibility: visible;
    }
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  -moz-box-align: center;
  gap: 4em;
  overflow-x: visible;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-left: 3rem;
    padding-right: 2.3rem;
    gap: 1.5em;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 910px;
  margin-left: auto;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const Button = styled(ButtonPrimary)`
  font-family: var(--font-secondary-text);
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`
