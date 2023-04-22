import styled from 'styled-components'

import {Button} from '@/modules/home/lead/LeadElements'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding-top: 4em;
  margin: 0 auto;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 30em;
`
export const ListWrap = styled.div`
  position: relative;
  width: max-content;
  padding: 4em 1em;

  span {
    font-size: 1.1em;
    font-weight: 600;
    color: #505a63;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.9em;
    font-family: Overpass;
    padding-top: 0.31em;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  flex: 1 0 50%;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    display: flex;
    font-size: 1.4em;
    padding: 1em 0 0 1em;
    align-items: center;
  }
`

export const StyledButton = styled(Button)`
  margin-top: 1.4em;
`

export const Icon = styled.span`
  font-size: 1.6em;
  margin-right: 10px;
  color: ${({theme}) => theme.colors.primary};
`

export const LinkWrap = styled.div`
  display: block;
  text-align: center;
  padding: 6em 0 8em;

  h2 {
    font-size: 2em;
  }
`
