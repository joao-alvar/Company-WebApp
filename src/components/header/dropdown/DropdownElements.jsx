import Link from 'next/link'
import {ImArrowRight2} from 'react-icons/im'

import styled from 'styled-components'

export const DropdownMenu = styled.ul`
  @media screen and (min-width: 911px) {
    position: absolute;
    padding: 1.2rem 0;
    top: 0;
    border: 1px solid #ebeaeb;
    border-radius: 8px;
    margin-left: -3px;
    width: 17em;
    min-width: unset;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transition: visibility 0.4s, opacity 0.4s ease,
      transform 0.6s cubic-bezier(0.3, -0.62, 0.21, 1);
    transform: translateY(1em);

    &.show {
      visibility: visible;
      opacity: 1;
      transform: translateY(3.3em);
      z-index: 9;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
    margin-top: 2em;

    &.show {
      display: block;
    }
  }
`

export const DropdownLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15em;
  color: rgb(80, 90, 99);
  transition: background-color 300ms cubic-bezier(0.15, 0.5, 0.5, 1) 0s,
    color 300ms cubic-bezier(0.15, 0.5, 0.5, 1) 0s,
    opacity 300ms cubic-bezier(0.15, 0.5, 0.5, 1) 0s,
    box-shadow 200ms cubic-bezier(0.4, 0.3, 0.8, 0.6) 0s;
  padding-top: 1.1em;
  padding-bottom: 1.1em;
  padding-left: 0.8rem;
  margin-left: 0.6rem;
  height: 30px;
  width: 90%;
  border-radius: 8px;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    font-size: 1.4em;
  }

  &:hover {
    background-color: rgba(25, 28, 31, 0.056);
  }
`
export const ArrowIconForward = styled(ImArrowRight2)`
  margin-left: auto;
  margin-right: 0.5rem;
  font-size: 1.3rem;
  visibility: hidden;
  opacity: 0;
  transform: translateX(-2px);
  transition: transform 0.3s ease-in, opacity 0.2s ease-out;

  ${DropdownLink}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
`
