import Link from 'next/link'

import styled from 'styled-components'

export const LinkStyled = styled.div`
  text-decoration: none;
`

export const NavigationLink = styled(Link)`
  position: relative;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  padding-top: 0.7em;
  cursor: pointer;
`
