import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  height: 10.5rem;
  width: 100%;
  top: 0;
  left: 0;
  user-select: none;
  transition: transform 150ms ease-in-out;
  z-index: 9999;
`

export const Nav = styled.nav`
  display: flex;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  justify-content: space-between;
  /* padding: 2.5rem 6em; */
  padding: 0 1em;
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  /* 
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    
  } */
`

export const LogoImg = styled(Image)`
  text-indent: -9999px;
  margin-bottom: 0.5rem;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;

  @media screen and (min-width: ${({theme}) => theme.size.md}) {
    gap: 3.8em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
    transform: ${({isOpen}) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    position: fixed;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    background: #ffffff;
    top: 0;
    left: 0;
    padding-top: 10em;
    padding-left: 1.7em;
    transition: transform 0.3s ease-in-out;
    gap: 1.5em;
    z-index: 10;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  div {
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
      border-top: 1px solid ${({theme}) => theme.colors.secondary};
    }
  }

  .active {
    color: ${({theme}) => theme.colors.primary};
  }

  .mobile_contact_link {
    display: none;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      display: block;
      width: 97%;
      padding-top: 1em;
      margin-top: 0.5em;
      border-top: 1px solid ${({theme}) => theme.colors.secondary};

      a {
        font-size: 1.4em;
      }
    }
  }
`

export const NavLink = styled(Link)`
  position: relative;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
  font-size: 1.6rem;
  cursor: pointer;
  @media screen and (min-width: ${({theme}) => theme.size.md}) {
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
    :hover::after {
      left: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    font-size: 1.6em;
  }
`

export const LinkTree = styled.span`
  position: relative;
  display: flex;
  cursor: pointer;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    /* background: #ffff20; */
    width: 97%;
  }

  .drop {
    visibility: visible;
    transform: translateY(2.6em);
    transition: visibility 0.4s, opacity 0.4s ease,
      transform 0.6s cubic-bezier(0.3, -0.62, 0.21, 1);
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      display: block;
    }
  }
`

export const ArrowIconDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.8em;
  transition: 0.3s cubic-bezier(0.3, -0.32, 0.21, 1);
  transform: ${({show}) => (show ? 'rotate(179deg)' : '')};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    position: absolute;
    right: 0;
    font-size: 2.2em;
    transform: ${({show}) => (show ? 'rotate(0)' : 'rotate(-92deg)')};
  }
`

export const DropdownMenu = styled.ul`
  @media screen and (min-width: ${({theme}) => theme.size.md}) {
    position: absolute;
    padding: 0.5rem 0;
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
    padding-bottom: 2em;
    margin-left: -6.5em;
  }

  li {
    padding: 0.2em;
    font-size: 1.3em;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      font-size: 1.45em;
    }
  }

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    font-weight: 600;
    color: #1d1d1d;
    width: 100%;
    padding: 0 1rem;
    height: 30px;
    margin: auto;
    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }
`

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: default;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 8px;
  background: ${({theme}) => theme.colors.primary};
  padding: 10px 22px;
  color: ${({theme}) => theme.colors.white};
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 700;
  &:hover,
  &.active {
    background: ${({theme}) => theme.colors.black};
  }
`
