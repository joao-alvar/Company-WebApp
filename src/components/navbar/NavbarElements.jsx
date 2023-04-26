import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {SlGlobe} from 'react-icons/sl'

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
  /* margin-left: -1.2em; */
  z-index: 11;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    /* margin-left: -3.2em; */
  }
`

export const LogoImg = styled(Image)`
  text-indent: -9999px;
  margin-bottom: 0.5rem;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-left: auto;
  margin-right: 4em; */
  font-weight: 600;

  @media screen and (min-width: ${({theme}) => theme.size.md}) {
    gap: 3.8em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    transform: ${({isOpen}) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    position: absolute;
    /* flex-direction: column; */
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 35em;
    background: white;
    top: 8.7em;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
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
`

export const NavigationLink = styled(Link)`
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
    display: block;
    height: 100%;
    width: 100%;
    padding: 1em;
    padding-left: 1.4em;
  }
`

export const LinkTitle = styled.span`
  position: relative;
  display: flex;

  .drop {
    visibility: visible;
    transform: translateY(2.6em);
    transition: visibility 0.4s, opacity 0.4s ease,
      transform 0.6s cubic-bezier(0.3, -0.62, 0.21, 1);
  }
`

export const ArrowIconDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.8em;
  transition: 0.3s cubic-bezier(0.3, -0.32, 0.21, 1);
`

export const DropdownMenu = styled.ul`
  position: absolute;
  padding: 0.5rem 0;
  border: 1px solid #ebeaeb;
  border-radius: 8px;
  margin-left: -3px;
  z-index: 9;
  width: 17em;
  min-width: unset;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  visibility: hidden;
  transform: translateY(1em);

  li {
    padding: 0.2em;
    font-size: 1.3em;
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
      /* text-decoration: underline; */
    }
  }
`

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: ${({theme}) => theme.colors.primary};
  padding: 10px 22px;
  color: ${({theme}) => theme.colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 700;
  &:hover,
  &.active {
    transition: all 0.2s ease-in-out;
    background: ${({theme}) => theme.colors.text};
  }
`

export const OtherLinks = styled.div`
  /* margin-left: auto;  */
  /* margin-right: 1em; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  gap: 2em;

  a {
    font-size: 1.4em;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`

export const GlobalIcon = styled(SlGlobe)`
  font-size: 1.8em;
`
