import {AiOutlineCopyrightCircle} from 'react-icons/ai'

import styled from 'styled-components'

export const FooterSection = styled.div`
  background: #15141d;
  position: static;
  bottom: 0;
  height: 10em;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 8em 0;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  gap: 1em;
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 98%;
    text-align: center;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1em;

  a {
    font-size: 1.3em;
    color: #88869a;
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.colors.white};
    }
  }
`

export const AllRights = styled.div`
  display: flex;
  font-size: 1.3em;
  color: #88869a;
`

export const CopyIcon = styled(AiOutlineCopyrightCircle)`
  color: #88869a;
`
