import Link from 'next/link'

import styled, {css} from 'styled-components'

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
  @media screen and (max-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 10px 12px;
  }
  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
    transition: all 0.2s ease-in-out;
  }

  ${(props) =>
    props.isPrimary &&
    css`
      &.button_secondary {
        color: ${({theme}) => theme.colors.black};
        background: transparent;
        padding: 0;
        text-decoration: none;
        text-align: center;
        font-family: var(--font-secondary-text);
        font-size: 1.3em;
        font-weight: 600;
        @media screen and (max-width: ${({theme}) => theme.size.sm}) {
          margin-left: 0;
          border: 2px solid ${({theme}) => theme.colors.black};
          border-radius: 8px;
          padding: 5px 12px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    `};
`
