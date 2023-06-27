import {BsCheckLg} from 'react-icons/bs'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const GridList = styled.ul`
  list-style: none;
  display: grid;
  height: 100%;
  width: 95%;
  grid-template-columns: 1 1fr;
  gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);
  padding-top: 2em;
  padding-bottom: 2em;

  @media screen and (max-width: 965px) {
    width: 100%;
  }
`

export const List = styled.li`
  height: auto;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 1pc;
  gap: 1rem;
  box-shadow: 0 2px 8px -2px rgba(24, 24, 24, 0.08),
    0 8px 9pt -2px rgba(106, 87, 87, 0.16);
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};

  p {
    font-size: 1.3em;
    font-family: var(--font-heading);
    font-weight: 500;
    line-height: 2.5rem;

    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 1.4rem;
    }
  }
`
export const Icon = styled(BsCheckLg)`
  font-size: 2.3rem;
  flex-shrink: 0;
  flex: none;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 2.1rem;
  }
`
