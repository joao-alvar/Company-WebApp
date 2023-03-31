import styled from 'styled-components'

import theme from '../../styles/Theme'

export const MobileMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: flex;
    position: absolute;
    top: 25%;
    right: 1.5rem;
    z-index: 10;
  }
`
