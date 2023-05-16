import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styled from 'styled-components'

import {ButtonPrimary} from '../button/ButtonElements'

export const Header = styled.header`
  position: sticky;
  height: 8rem;
  width: 100%;
  top: 0;
  left: 0;
  user-select: none;
  transition: transform 150ms ease-in-out;
  z-index: 9999;
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px);
  background-color: rgba(234, 237, 240, 0.8);
  /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
  box-shadow: 0 2px 2rem rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  padding: 0 1em;
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 11;
`

export const LogoImg = styled(Image)`
  text-indent: -9999px;
  margin-bottom: 0.5rem;
`

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: var(--font-heading);
  font-weight: 600;

  @media screen and (min-width: 911px) {
    gap: 3.8em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    transform: ${({isOpen}) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    position: fixed;
    align-items: start;
    width: 100%;
    height: 100%;
    min-height: ${({isOpen}) => (isOpen ? '1000vh' : '100%')};
    overflow: auto;
    top: 0;
    left: 0;
    padding-top: 10em;
    padding-left: 1.7em;
    gap: 1.5em;
    z-index: 10;
    transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
    background: ${({theme}) => theme.colors.white};
  }

  div {
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
    }
  }

  .active {
    @media screen and (min-width: 911px) {
      &:after {
        left: 0;
        width: 100%;
      }
    }
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      color: #880707;
    }
  }

  .mobile_contact_link {
    display: none;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      display: block;
      a {
        font-size: 1.4em;
      }
    }
  }
`

export const List = styled.ul`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 2em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }

  li {
    position: relative;
    width: auto;
    backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .drop {
    visibility: visible;
    transform: translateY(2.6em);
    transition: visibility 0.4s, opacity 0.4s ease,
      transform 0.6s cubic-bezier(0.3, -0.62, 0.21, 1);
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      display: block;
      transform: translateY(5px);
    }
  }

  .dropdown_link {
    display: flex;
    margin-right: 1em;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
    }
  }
  .dropdown_container {
    position: relative;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 95%;
      outline: 0;
    }
  }
`

export const NavLink = styled(Link)`
  position: relative;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (min-width: 911px) {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      bottom: -8px;
      height: 2px;
      background-color: ${({theme}) => theme.colors.text};
      transition: 0.2s ease-out;
    }
    &:hover::after {
      left: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    font-size: 1.6em;
  }
`

export const DropdownMenu = styled.div`
  @media screen and (min-width: 911px) {
    position: absolute;
    padding: 1.2rem 0;
    margin-top: -1.4em;
    border: 1px solid #ebeaeb;
    border-radius: 8px;
    margin-left: -3px;
    z-index: 9;
    width: 17em;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    visibility: hidden;
    transform: translateY(1em);
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
    margin-top: 0.8em;
  }

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    font-weight: 600;
    font-size: 1.3em;
    color: #1d1d1d;
    width: 100%;
    padding: 0 1rem;
    height: 30px;
    @media screen and (min-width: 911px) {
      padding: 1.1em 1rem;
    }

    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      font-size: 1.45em;
    }
    &:hover {
      color: #880707;
    }
  }
`

export const ArrowIconDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.3em;
  position: absolute;
  right: -1em;
  transition: 0.3s cubic-bezier(0.3, -0.32, 0.21, 1);
  transform: ${({show}) => (show ? 'rotate(179deg)' : '')};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    right: 0;
    top: -2px;
    font-size: 1.5em;
    transform: ${({show}) => (show ? 'rotate(0)' : 'rotate(-92deg)')};
  }
`

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
  }
`

export const NavButton = styled(ButtonPrimary)`
  font-family: var(--font-secondary-text);
  font-size: 1.5rem;
  font-weight: 500;
`
