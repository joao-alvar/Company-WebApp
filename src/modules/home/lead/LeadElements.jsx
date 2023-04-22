import styled from 'styled-components'

import {FeaturedSection} from '../featured/FeaturedElements'

export const LeadSection = styled(FeaturedSection)``

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45em;
  /* margin: 6em 0 4em; */
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
  /* color: ${({theme}) => theme.colors.primaryTextColor}; */
  /* border-top: 2px solid ${({theme}) => theme.colors.primaryTextColor}; */
  border-bottom: 2px solid ${({theme}) => theme.colors.primaryTextColor};

  h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 3.6em;
    padding: 0.9em 2em 0 2em;
  }
`

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 1.4em;
  border-radius: 6px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.black};
  margin-top: 3em;
  &:hover {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.primaryTextColor};
  }
`
