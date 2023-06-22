import Link from 'next/link'

import styled from 'styled-components'

export const FooterSection = styled.footer`
  position: static;
  bottom: 0;
  min-height: 10em;
  height: auto;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding-top: 2pc;
  padding-bottom: 2pc;
  background: ${({theme}) => theme.colors.black};
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
  gap: 1em;
  font-weight: 500;
  font-family: var(--font-heading);
`

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 7rem;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid #fff;

  &.is_border {
    border-top: 1px solid #fff;
    padding-top: 0.5rem;
  }

  .socials_icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
  }
`
export const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  flex-shrink: 0;
  min-width: 0px;

  img {
    width: 100%;
  }
`

export const Icon = styled.span`
  font-size: 2.5rem;
  color: #88869a;

  &:hover {
    color: #fff;
  }
`

export const FooterNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1em;

  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #88869a;
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.colors.white};
    }
  }

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
  }
`

export const AllRights = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: #88869a;
`
