import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 45rem;
  line-height: initial;
  background: ${({theme}) => theme.colors.tertiary};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
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
  }

  img {
    object-fit: cover;
    background-position: center;
    width: 80%;
    height: 100%;
    pointer-events: none;
    cursor: default;
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
  }

  h2 {
    font-size: 3.5em;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-left: -8px;
    @media screen and (max-width: 430px) {
      margin-left: -4px;
    }
  }

  p {
    font-size: 1.72em;
    padding: 0.41em 0 1em;
    line-height: 1.5em;
  }
`

export const Button = styled(Link)`
  padding: 6px 12px;
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
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    width: 98%;
  }
`
