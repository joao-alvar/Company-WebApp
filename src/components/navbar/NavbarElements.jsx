import styled from 'styled-components'

import theme from '../../styles/Theme'
import {NavLink as Link} from 'react-router-dom'

export const Header = styled.header`
  position: sticky;
  /* display: block; */
  height: 10.5rem;
  width: 100%;
  top: 0;
  left: 0;
  user-select: none;
  transition: transform 150ms ease-in-out;
  z-index: 9999;

  .nav-bar--hidden {
    transform: translateY(-100%);
  }
`

export const Nav = styled.nav`
  display: flex;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 3.5rem;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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

  a {
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
  }

  .do_not_display {
    @media screen and (min-width: ${({theme}) => theme.size.md}) {
      display: none;
    }
  }

  .active_link {
    &.active {
      color: ${({theme}) => theme.colors.primary};
    }
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  width: 14em;
  align-items: center;
  justify-content: center;
  margin-left: -2.2em;
  z-index: 11;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    margin-left: -3.2em;
  }
`

export const LogoImg = styled.img`
  height: fit-content;
  text-indent: -9999px;
  margin-bottom: 0.5rem;
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
  font-size: 1.2em;
  font-weight: 700;
  &:hover,
  &.active {
    transition: all 0.2s ease-in-out;
    background: ${({theme}) => theme.colors.text};
  }
`
