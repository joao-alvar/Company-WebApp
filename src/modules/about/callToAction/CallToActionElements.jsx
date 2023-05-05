import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 8em 0 12em;
  line-height: initial;
`
export const Content = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: 'Inter';

  h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 3.6em;
    padding: 0.9em 2em 0 2em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 90%;
    h2 {
      padding: 0.9em 0.1em 0 0.1em;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    h2 {
      padding: 0.9em 0 0 0;
    }
  }
`

export const Button = styled(Link)`
  padding: 0.4em 0.8em;
  font-size: 1.4em;
  border-radius: 8px;
  font-weight: 600;
  background: ${({theme}) => theme.colors.black};
  margin-top: 3em;
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 0.6em 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 90%;
  }
`
