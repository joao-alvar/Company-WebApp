import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 15em;
  height: auto;
  line-height: initial;
  padding: 10px;
  padding-top: 0;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }
`

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: inherit;
  overflow: hidden;
  padding: 2rem;
  background-color: rgb(228, 228, 228);

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    height: auto;
  }

  @media screen and (max-width: 762px) {
    flex-direction: column;
    padding: 0;
  }
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  margin-left: 2.5rem;
  margin-right: auto;
  height: 100%;
  border-left: 3px solid #000;

  @media screen and (max-width: 762px) {
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 1.3rem;
  }
`

export const Title = styled.header`
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};

    @media screen and (max-width: 470px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 335px) {
      font-size: 2.3rem;
    }
  }
`
export const Button = styled(Link)`
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  margin-top: 1em;
  font-weight: 500;
  display: flex;
  width: max-content;
  align-items: center;
  color: ${({theme}) => theme.colors.link};

  &::before {
    content: '';
    background: ${({theme}) => theme.colors.link};
    bottom: -3px;
    display: block;
    height: 1px;
    left: 0;
    max-width: calc(100% - 1.6em);
    position: absolute;
    -webkit-transition: width 300ms ease;
    transition: width 300ms ease;
    width: 0%;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`

export const ImageWrap = styled.div`
  width: 20rem;
  height: 100%;
  align-items: center;
  flex-shrink: 0;
  flex: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: none;
  }

  @media screen and (max-width: 762px) {
    width: 100%;
    height: auto;
  }
`
