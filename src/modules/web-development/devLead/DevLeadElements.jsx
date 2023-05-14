import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 2em 0 8em;
  line-height: initial;
  flex-direction: column;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 2em 0 6em;
  }
`

export const Content = styled.div`
  width: 90%;
  padding-right: 6em;
  @media screen and (max-width: 690px) {
    width: 100%;
    padding: 1em;
    @media screen and (max-width: 460px) {
      text-align: center;
    }
  }

  h2 {
    font-size: 3.5em;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-left: -8px;
  }

  p {
    font-size: 1.72em;
    padding: 0.41em 0 1em;
    line-height: 1.5em;
    font-weight: 500;
    color: ${({theme}) => theme.colors.text};
  }
`

export const BtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 2em 0;
  gap: 1em;
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 98%;
  }

  .active {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }
`

export const Button = styled.button`
  padding: 4px 12px;
  font-size: 1.5em;
  transition: all 300ms ease-out;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.black};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
  &:hover {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }
  @media screen and (max-width: 380px) {
    font-size: 1.2em;
    padding: 4px 10px;
  }
`

export const ActiveContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4em;
  height: auto;
  width: 90%;
  gap: 2em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    width: 98%;

    .img_wrap {
      width: 100%;
    }

    img {
      margin: 0 auto;
      width: 100%;
      object-fit: cover;
    }
  }

  .img_wrap {
    display: flex;

    img {
      border-radius: 8px;
    }
  }

  .content_wrap {
    width: 60%;
    display: flex;
    justify-content: start;
    padding-right: 7em;
    /* margin-left: auto; */
    flex-direction: column;
    font-weight: 600;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
      padding-right: 2em;
    }
    @media screen and (max-width: 425px) {
      text-align: center;
      padding: 0;
    }
  }

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
  @media screen and (max-width: 425px) {
    margin: 0 auto;
    text-underline-offset: 2px;
  }
`
