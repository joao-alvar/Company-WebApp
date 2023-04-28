import {RiArrowDownSLine} from 'react-icons/ri'

import styled from 'styled-components'

import {Button} from '@/modules/home/lead/LeadElements'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0 auto;
  line-height: initial;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  padding: 8em 0;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
  padding: 2em 0;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30em;
  padding: 4em 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2em;
  padding: 0 5em;
  @media screen and (max-width: 1200px) {
    width: 98%;
    padding: 0 2em;
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
    font-family: Inter;
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
`

export const ListWrap = styled.div`
  margin-top: 1em;
  width: 50%;
  @media screen and (max-width: 1200px) {
    width: 98%;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  @media screen and (max-width: 670px) {
    padding: 1em 0;
  }

  .active {
    background: #f2f2f2;
  }

  li {
    position: relative;
    display: flex;
    margin: 0 auto;
    min-height: 7em;
    width: 90%;
    border-bottom: 1px #f2f2f2 solid;
    border-radius: 10px;
    padding: 30px;
    transition: 0.4s all ease-in-out;
    /* background: ${({isOpen}) => (isOpen ? '#f2f2f2' : 'none')}; */
    @media screen and (max-width: 1200px) {
      width: 98%;
    }
    @media screen and (max-width: 670px) {
      padding: 30px 8px;
    }
    .list_content {
      align-items: center;
    }

    h3 {
      font-size: 1.5em;
      text-transform: uppercase;
      padding-right: 2em;
      cursor: pointer;
      /* font-family: Inter; */
    }

    p {
      font-size: 1.4em;
      font-family: Overpass;
      padding-top: 0.5em;
      padding-right: 1em;
      color: #010101;
    }
  }
`

export const Icon = styled(RiArrowDownSLine)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 2.5em;
  position: absolute;
  right: 5px;
`
