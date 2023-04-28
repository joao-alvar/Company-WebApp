import styled from 'styled-components'

import {FeaturedSection} from '../featured/FeaturedElements'

export const LeadSection = styled(FeaturedSection)``

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12em 0 4em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 8em 0 2em;
  }
  @media screen and (max-width: 700px) {
    padding: 2em 0 0;
  }
`

export const LeadInformation = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: 'Inter';
  border-bottom: 2px solid ${({theme}) => theme.colors.primaryTextColor};
  padding-bottom: 8.2em;
  @media screen and (max-width: 700px) {
    border-bottom: none;
  }

  h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 3.6em;
    padding: 0.9em 2em 0 2em;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      padding: 0.9em 0.2em 0 0.2em;
    }
    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 2.6em;
    }
  }
`

export const Button = styled.button`
  padding: 10px 29px;
  font-size: 1.4em;
  border-radius: 8px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.black};
  margin-top: 3em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.primaryTextColor};
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }
`
