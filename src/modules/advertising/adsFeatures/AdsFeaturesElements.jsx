import {AiFillCheckCircle} from 'react-icons/ai'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 1500px;
  overflow: hidden;
  flex-shrink: 0;
  padding-top: 2pc;
  padding-bottom: 1pc;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 0;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 45em;
  height: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  font-family: var(--font-heading);
  /* gap: 2rem; */

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media screen and (max-width: 510px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    flex-direction: column;
  }
`

export const ListWrap = styled.div`
  position: relative;
  height: 100%;

  @media screen and (max-width: 510px) {
    font-size: 80%;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #505a63;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.9em;
    padding-top: 0.31em;
    font-family: var(--font-heading);
  }
`

export const ImageWrap = styled.div`
  display: block;
  flex: 1 0 50%;
  align-items: center;

  img {
    width: 90%;
    height: 100%;
    pointer-events: none;
    border-radius: 1pc;
  }

  .image_2 {
    /* width: 70%; */
    /* height: 70%; */
  }
`

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const List = styled.li`
  display: flex;
  padding-top: 2.8rem;
  padding-right: 2.3rem;
  align-items: flex-start;
  word-wrap: break-word;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 510px) {
    padding-right: 0;
    font-size: 1.3rem;
  }
`

export const Icon = styled(AiFillCheckCircle)`
  font-size: 1.6em;
  margin-right: 10px;
  flex-shrink: 0;
  flex: none;
  color: ${({theme}) => theme.colors.text};
`
