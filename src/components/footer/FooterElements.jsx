import {HiArrowRight} from 'react-icons/hi'

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

  .call_to_action {
    color: #88869a;

    h3 {
      font-size: 1.6rem;
      font-weight: 600;
    }

    a {
      display: flex;
      align-items: center;
      padding: 0.4rem 1.5rem;
      border: 2px solid #88869a;
      border-radius: 10px;
      text-decoration: none;
      color: inherit;
      font-size: 2rem;
      position: relative;
      &:hover {
        color: #fff;
        border-color: #fff;
      }
    }

    @media only screen and (max-width: 500px) {
      display: none;
    }
  }

  .socials_icons {
    display: flex;
    gap: 1rem;
    margin-left: auto;
  }
`

export const Icon = styled.span`
  font-size: 3rem;
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

export const IconArrow = styled(HiArrowRight)`
  font-size: 0.9em;
  margin-left: 0.25em;
`
