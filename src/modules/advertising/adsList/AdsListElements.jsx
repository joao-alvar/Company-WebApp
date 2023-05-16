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
`

export const Text = styled.h2`
  font-family: var(--font-heading);
  font-size: 4em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    font-size: 3.5em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-bottom: 1pc;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2em;
  margin-left: 2em;
  padding: 2em;
  border-radius: 1pc;

  @media screen and (max-width: 1200px) {
    width: 98%;
    padding: 0 1em;
  }

  @media only screen and (max-width: ${({theme}) => theme.size.md}) {
    display: none;
  }

  @media screen and (max-width: 670px) {
    padding: 0 8px;
  }

  span {
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.6em;
    font-weight: 600;
    color: #24292f;
    padding-top: 0.81em;
  }

  a {
    width: max-content;
  }

  .text {
    transition: 0.2s ease-in-out;
    background: none;
    position: absolute;
    top: 0;
    visibility: hidden;
    transition: opacity 2s;
    opacity: 0;

    &.show {
      transition: 1s ease-in-out;
      z-index: 4;
      visibility: visible;
      position: relative;
      opacity: 1;
    }
  }
`

export const ListWrap = styled.div`
  margin-top: 1em;
  width: 50%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  margin-left: auto;
  margin-right: 2em;
  border-radius: 1pc;
  width: 90%;
  background: #fff;
  box-shadow: 0 2px 8px -2px rgba(24, 24, 24, 0.08),
    0 8px 9pt -2px rgba(24, 24, 24, 0.16);

  @media only screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 92%;
    margin: 0 auto;
  }

  @media screen and (max-width: 670px) {
    padding: 1em 0;
  }

  .active {
    opacity: 1;

    button {
      cursor: default;
    }
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 5em;
    width: 90%;
    padding: 2.5em 0;
    padding-right: 3em;
    transition: 0.4s all ease-in-out;
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    &:nth-last-child(1) {
      border-bottom: none;
    }

    @media only screen and (max-width: 1200px) {
      width: 98%;
    }

    @media only screen and (max-width: ${({theme}) => theme.size.md}) {
      border-bottom: 1px #e0dcdc solid;
    }

    @media screen and (max-width: 670px) {
      padding: 30px 8px;
    }
    .list_content {
      align-items: center;
    }

    button {
      text-align: start;
      text-decoration: none;
      color: ${({theme}) => theme.colors.black};
      display: flex;
      width: 100%;
      transition: 0.4s all ease-in-out;
      font-size: 1.4em;
      text-transform: uppercase;
      padding-right: 2em;
      font-family: var(--font-heading);
      font-weight: 600;
    }

    p {
      font-size: 1.4em;
      padding-top: 0.5em;
      padding-right: 1em;
      color: #010101;
    }

    .content_p {
      @media screen and (max-width: ${({theme}) => theme.size.md}) {
        display: none;
      }
    }
  }

  .arrow_up {
    transition: all 0.3s ease-in;
    transform: rotate(179deg);
  }
`

export const Icon = styled(RiArrowDownSLine)`
  color: ${({theme}) => theme.colors.black};
  font-size: 2.5em;
  position: absolute;
  right: 5px;
  top: 0.9em;
`

export const ContentMobile = styled.div`
  display: none;
  @media only screen and (max-width: ${({theme}) => theme.size.md}) {
    display: flex;
    flex-direction: column;

    p {
      margin-top: 1em;
      font-family: var(--font-heading);
      font-weight: 500;
      line-height: 1.4em;
    }
  }
`
