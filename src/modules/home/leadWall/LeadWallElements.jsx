import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const LeadContainer = styled.div`
  height: 40em;
  width: 100%;
  display: flex;
  background: ${({theme}) => theme.colors.black};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
    padding-bottom: 5em;
  }
`

export const LeadContentText = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors.white};
  @media screen and (max-width: 1100px) {
    width: 50%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  h2 {
    padding: 0 1.2em;
    margin-top: 2em;
    font-size: 2em;
    @media screen and (max-width: ${({theme}) => theme.size.xs}) {
      padding: 0 0.7em 0.4em;
    }
  }

  p {
    padding: 0.9em 1.5em;
    font-family: Overpass;
    font-size: 1.4em;
    font-weight: 300;
    @media screen and (max-width: ${({theme}) => theme.size.xs}) {
      padding: 0 1em;
    }
  }

  .lead_content_p {
    padding-top: 0.5em;
  }
`
export const LeadImageWrap = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    width: 50%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`
export const LeadImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Button = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
  background: transparent;
  border: 2px solid ${({theme}) => theme.colors.white};
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.8em 1em 0.4em 1em;
  transition: all 0.3s ease-in-out;
  margin-top: 0.8em;
  margin-left: 1.9em;
  text-transform: uppercase;
  font-family: Overpass;
  width: 9em;
  &:hover {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    margin-left: 1.2em;
  }
`
