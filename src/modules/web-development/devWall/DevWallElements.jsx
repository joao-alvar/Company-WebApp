import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 45rem;
  overflow: hidden;
  flex-shrink: 0;
  line-height: initial;
  background: ${({theme}) => theme.colors.black};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    padding: 8em 0;
    gap: 3em;
  }
`

export const ImageWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  img {
    object-fit: cover;
    background-position: center;
    width: 80%;
    height: 100%;
    pointer-events: none;
    cursor: default;
    border-radius: 1pc;
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`

export const Content = styled.div`
  width: 50%;
  padding-right: 5em;
  color: ${({theme}) => theme.colors.white};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 80%;
    padding-right: 0;
    padding-left: 0.5em;
  }

  @media screen and (max-width: 700px) {
    width: 95%;
    font-size: 80%;
  }

  h2 {
    font-size: 4rem;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.72em;
    padding: 0.41em 0 1em;
    line-height: 1.5em;
  }
`

export const Button = styled(Link)`
  padding: 0.6rem 1.2rem;
  font-size: 1.5em;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #ffffff;
  color: #ffffff;
  transition: all 0.3s;
  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
    border-color: ${({theme}) => theme.colors.primaryTextColor};
  }
  @media screen and (max-width: 500px) {
    width: 98%;
    display: flex;
    justify-content: center;
  }
`
