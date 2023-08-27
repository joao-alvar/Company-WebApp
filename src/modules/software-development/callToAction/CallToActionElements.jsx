import Link from 'next/link'
import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 30rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  line-height: initial;
  color: ${({theme}) => theme.colors.white};
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 1rem;
  grid-auto-rows: minmax(45rem, auto);
  padding: 1rem;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GridBanner = styled.div`
  height: 100%;
  float: left;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  border-radius: 1pc;
`

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }
`

export const ActionLink = styled(Link)`
  width: 100%;
  height: 100%;
  min-height: inherit;
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.colors.black};

  h2 {
    font-size: 3.4em;
    font-family: var(--font-heading);
    font-weight: 600;
    padding-bottom: 0.3em;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.5em;
    padding-bottom: 0.8em;
  }
`

export const Button = styled.h3`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  font-size: 1.6em;
  font-weight: 600;
  border-radius: 8px;
  align-items: center;
  width: max-content;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
  }
`

export const IconArrow = styled(HiArrowRight)`
  font-size: 1.75rem;
  margin-top: 4px;
  margin-left: 0.4em;
`
