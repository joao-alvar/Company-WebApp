import {RiArrowDownSLine} from 'react-icons/ri'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0;
  line-height: initial;
  padding-top: 4pc;
  padding-bottom: 3pc;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 2.5pc;
    padding-bottom: 1pc;
  }
`

export const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.8rem;
  font-weight: 600;
  padding-bottom: 1em;
  width: 92%;
  margin: 0 auto;
  padding-right: 1em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 2rem;
  }

  @media only screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 3rem;
    width: 100%;
    padding-left: 1.2rem;
    padding-top: 0;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.8rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  height: auto;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-bottom: 1pc;
  }
`

export const Card = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  border-radius: 1pc;
  width: 92%;
  margin: 0 auto;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0 2px 8px -2px rgba(24, 24, 24, 0.08),
    0 8px 9pt -2px rgba(24, 24, 24, 0.16);

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

export const ListItems = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 5em;
  width: 100%;
  padding: 2.7rem 1rem;
  transition: 0.5s all ease-in-out;
  gap: 2rem;
  border-bottom: 1px solid rgb(217, 216, 217);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  &.active {
    cursor: default;
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    border-color: rgb(235, 234, 235);
  }
`
export const Button = styled.button`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  cursor: inherit;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`

export const ActiveContent = styled.div`
  display: none;

  &.active {
    display: flex;
  }
`

export const Icon = styled(RiArrowDownSLine)`
  color: ${({theme}) => theme.colors.black};
  font-size: 2.5rem;
  margin-left: auto;
  transition: 0.15s ease-in;

  &.active {
    transform: rotate(180deg);
  }
`

export const ImageWrap = styled.div`
  display: block;
  width: 50%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Text = styled.p`
  font-size: 1.5rem;
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({theme}) => theme.colors.text};

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`
