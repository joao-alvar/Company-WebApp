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
  z-index: 1000;
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
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  width: 100%;
  height: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  flex-shrink: 0;
  min-width: 0px;
  z-index: 10;
`

export const NavItemsWrap = styled.nav`
  display: grid;
  width: 100%;
  -moz-box-align: center;
  align-items: center;
  /* column-gap: 1rem; */
  transition: 0.2s ease-in-out;
  grid-template-columns: 1fr auto auto;
  margin-left: 3.5rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    padding-top: 9.5em;
    flex-direction: column;
    background: ${({theme}) => theme.colors.white};
    visibility: hidden;
    opacity: 0;

    &.open {
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
  gap: 3em;
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
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`
