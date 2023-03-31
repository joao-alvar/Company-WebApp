import styled, {css} from 'styled-components'

import {NavLink as Link} from 'react-router-dom'

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
