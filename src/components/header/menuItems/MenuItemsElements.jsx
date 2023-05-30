import Link from 'next/link'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styled from 'styled-components'

export const ListItems = styled.li`
  position: relative;
  width: auto;
  cursor: pointer;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (min-width: 911px) {
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0%;
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
    font-size: 1.8rem;
    font-weight: 600;
  }
`

export const DropdownButton = styled(NavLink)`
  margin-right: 1em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    margin-right: 0;
    text-align: start;
  }
`

export const ArrowIconDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.3em;
  position: absolute;
  /* top: -1px; */
  right: -1em;
  transition: 0.3s cubic-bezier(0.3, -0.32, 0.21, 1);

  &.show {
    transform: rotate(179deg);
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    right: 0;
    top: -3px;
    font-size: 1.6em;
    transform: rotate(-90deg);
    &.show {
      transform: rotate(0deg);
    }
  }
`
