import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  min-height: 50rem;
  height: auto;
  padding-top: 7pc;
  padding-bottom: 7pc;
  line-height: initial;
  flex-direction: column;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-bottom: 3pc;
  }
`

export const Content = styled.div`
  width: 90%;
  padding-right: 6em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding: 1.5rem;
  }

  p {
    font-size: 1.72em;
    padding: 0.41em 0 1em;
    line-height: 1.5em;
    font-weight: 500;
    color: ${({theme}) => theme.colors.text};
  }
`

export const Title = styled.h2`
  font-size: 3.5em;
  font-family: var(--font-heading);
  font-weight: 600;
  margin-left: -8px;
`

export const BtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 2em 0;
  gap: 1em;

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
`

export const Button = styled.button`
  padding: 4px 12px;
  font-size: 1.5em;
  transition: all 300ms ease-out;
  border-radius: 8px;
  flex-shrink: 0;
  word-wrap: break-word;
  border: 1px solid ${({theme}) => theme.colors.black};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};

  &:hover {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }

  &.active {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }

  @media screen and (max-width: 380px) {
    font-size: 1.2em;
    padding: 4px 10px;
  }
`

export const ActiveContent = styled.div`
  position: relative;
  padding-top: 4em;
  height: auto;
  width: 90%;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  height: inherit;
  width: 100%;
  background: none;
  gap: 2em;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0.3s;

  &.is_display {
    z-index: 5;
    position: relative;
    visibility: visible;
    opacity: 1;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
  }
`

export const ImageWrap = styled.div`
  display: flex;

  img {
    border-radius: 1pc;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;

    img {
      margin: 0 auto;
      width: 100%;
      object-fit: cover;
    }
  }
`

export const TextContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: start;
  padding-right: 7em;
  flex-direction: column;
  font-weight: 600;

  h2 {
    font-size: 2.4em;
    padding-bottom: 0.4em;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.4em;
    padding-bottom: 1em;
    font-weight: 500;
    line-height: 1.5em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 2em;
  }
`

export const ButtonActive = styled(Link)`
  width: max-content;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.6em;
  text-decoration: underline;
  width: fit-content;

  &:hover {
    color: ${({theme}) => theme.colors.primary};
  }
`
