import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 60rem;
  overflow: hidden;
  flex-shrink: 0;
  line-height: initial;
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: 1126px) {
    padding-top: 4pc;
    padding-bottom: 4pc;
    gap: 3em;
  }
`

export const Title = styled.h2`
  font-size: 4rem;
  font-family: var(--font-heading);
  font-weight: 600;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 1126px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 3rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  width: inherit;
  padding-left: 3rem;
  padding-right: 3rem;
  gap: 3rem;

  @media screen and (max-width: 1126px) {
    flex-direction: column;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const ImageWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1126px) {
    width: 100%;
  }

  img {
    object-fit: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-radius: 1pc;
  }
`

export const Content = styled.div`
  width: 50%;
  padding-right: 5em;

  p {
    font-size: 1.7rem;
    padding: 0.41em 0 1em;
    line-height: 2.8rem;
    font-family: var(--font-heading);
    font-weight: 400;
  }

  @media screen and (max-width: 1126px) {
    width: 100%;
    padding-right: 0;
    padding-left: 0.5em;
  }

  @media screen and (max-width: 700px) {
    font-size: 80%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    p {
      font-size: 1.5rem;
    }
  }
`

export const Button = styled(Link)`
  padding: 0.4rem 1.2rem;
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
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
