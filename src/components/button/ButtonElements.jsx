import Link from 'next/link'

import styled from 'styled-components'

export const ButtonPrimary = styled(Link)`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.black};
  text-decoration: none;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1.2em;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }

  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
  }
`

export const ButtonSecondary = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1.2em;
  border-radius: 8px;
  background: transparent;
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  border: 2px solid ${({theme}) => theme.colors.black};
  padding: 0.5rem 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 0.8px ${({theme}) => theme.colors.black};
  }

  @media screen and (max-width: 768px) {
    padding: 0.55rem 1.5rem;
  }
`

export const LeadButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-family: var(--font-heading);
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1.3rem;
  outline: none;
  font-size: 1.5em;
  background: transparent;
  color: ${({theme}) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
    border-color: ${({theme}) => theme.colors.primaryTextColor};
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
`
